package in.shabhushan.core.slingmodel;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;
import java.util.List;

/**
 * @author Shashi Bhushan
 */
@Model(adaptables = Resource.class,defaultInjectionStrategy= DefaultInjectionStrategy.OPTIONAL)
public class EventWinnerListTabEntry {
    @Inject
    private String eventImage;

    @Inject
    private String eventImageAltText;

    @Inject
    private String eventTitle;

    @Inject
    private List<EventWinnerListTabEntryItem> eventWinnerList;

    public String getEventImage() {
        return eventImage;
    }

    public String getEventImageAltText() {
        return eventImageAltText;
    }

    public String getEventTitle() {
        return eventTitle;
    }

    public List<EventWinnerListTabEntryItem> getEventWinnerList() {
        return eventWinnerList;
    }
}
