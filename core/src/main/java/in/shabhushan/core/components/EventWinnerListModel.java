package in.shabhushan.core.components;

import com.adobe.cq.sightly.WCMUsePojo;
import in.shabhushan.core.model.EventWinnerTab;
import in.shabhushan.core.model.EventWinnerTabEntry;
import in.shabhushan.core.model.EventWinnerTabEntryItem;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

import static in.shabhushan.core.common.EventWinnerListConstants.*;

/**
 * @author Shashi Bhushan
 */
public class EventWinnerListModel extends WCMUsePojo {

    private static final Logger LOG = LoggerFactory.getLogger(EventWinnerListModel.class);

    private String title;

    private List<EventWinnerTab> eventWinnerTabs = new ArrayList<>();

    @Override
    public void activate() throws Exception {
        LOG.info("EventWinnerListModel#activate Started");

        Resource parentTab = getResource().getChild("tab");
        this.title = getResource().getValueMap().get(EVENT_WINNER_TITLE_NODE_NAME, String.class);

        parentTab.listChildren().forEachRemaining((Resource tab) -> {
            eventWinnerTabs.add(getEventWinnerListTab(tab));
        });

        LOG.info("EventWinnerListModel#activate Finished");
    }

    private EventWinnerTab getEventWinnerListTab(Resource resource) {
        ValueMap valueMap = resource.getValueMap();

        EventWinnerTab tab = new EventWinnerTab();

        tab.setTitle(valueMap.get(EVENT_WINNER_TAB_TITLE_NODE_NAME, String.class));
        tab.setSubtitle(valueMap.get(EVENT_WINNER_TAB_SUBTITLE_NODE_NAME, String.class));

        Resource tabEntry = resource.getChild("tabEntry");
        tabEntry.listChildren().forEachRemaining((Resource entry) -> {
            EventWinnerTabEntry eventWinnerTabEntry = new EventWinnerTabEntry();
            ValueMap entryValueMap = entry.getValueMap();
            eventWinnerTabEntry.setEventTitle(entryValueMap.get("eventTitle", String.class));
            eventWinnerTabEntry.setEventImage(entryValueMap.get("eventImage", String.class) + ORIGINAL_RENDITION_PATH);
            eventWinnerTabEntry.setEventImageAltText(entryValueMap.get("eventImageAltText", String.class));

            List<EventWinnerTabEntryItem> eventWinnerTabEntryItems = new ArrayList<>();

            entry.getChild("eventWinnerList").listChildren().forEachRemaining((Resource item) -> {
                EventWinnerTabEntryItem eventWinnerTabEntryItem = new EventWinnerTabEntryItem();

                ValueMap itemProperties = item.getValueMap();
                eventWinnerTabEntryItem.setName(itemProperties.get("name", String.class));
                eventWinnerTabEntryItem.setPosition(itemProperties.get("position", String.class));

                eventWinnerTabEntryItems.add(eventWinnerTabEntryItem);
            });

            eventWinnerTabEntry.setEventWinnerTabEntryItems(eventWinnerTabEntryItems);
            tab.getEventWinnerTabEntries().add(eventWinnerTabEntry);
        });

        return tab;
    }

    public List<EventWinnerTab> getEventWinnerTabs() {
        return eventWinnerTabs;
    }

    public String getTitle() {
        return title;
    }
}
