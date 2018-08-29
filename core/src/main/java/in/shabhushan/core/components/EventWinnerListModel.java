package in.shabhushan.core.components;

import com.adobe.cq.sightly.WCMUsePojo;
import in.shabhushan.core.model.EventWinnerListTab;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;

import java.util.ArrayList;
import java.util.List;

import static in.shabhushan.core.common.EventWinnerListConstants.EVENT_WINNER_TAB_SUBTITLE_NODE_NAME;
import static in.shabhushan.core.common.EventWinnerListConstants.EVENT_WINNER_TAB_TITLE_NODE_NAME;

/**
 * @author Shashi Bhushan
 */
public class EventWinnerListModel extends WCMUsePojo {

    private List<EventWinnerListTab> eventWinnerListTabs = new ArrayList<>();

    @Override
    public void activate() throws Exception {
        Resource parentTab = getResource().getChild("tab");

        parentTab.listChildren().forEachRemaining((Resource tab) -> {
            eventWinnerListTabs.add(getEventWinnerListTab(tab));
        });
    }

    private EventWinnerListTab getEventWinnerListTab(Resource resource) {
        ValueMap valueMap = resource.getValueMap();

        EventWinnerListTab tab = new EventWinnerListTab();

        tab.setTitle(valueMap.get(EVENT_WINNER_TAB_TITLE_NODE_NAME, String.class));
        tab.setSubtitle(valueMap.get(EVENT_WINNER_TAB_SUBTITLE_NODE_NAME, String.class));

        return tab;
    }

    public List<EventWinnerListTab> getEventWinnerListTabs() {
        return eventWinnerListTabs;
    }
}
