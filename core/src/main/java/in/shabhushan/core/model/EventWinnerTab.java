package in.shabhushan.core.model;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Shashi Bhushan
 */
public class EventWinnerTab {

    private String title;
    private String subtitle;
    List<EventWinnerTabEntry> eventWinnerTabEntries = new ArrayList<>();

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public List<EventWinnerTabEntry> getEventWinnerTabEntries() {
        return eventWinnerTabEntries;
    }

    public void setEventWinnerTabEntries(List<EventWinnerTabEntry> eventWinnerTabEntries) {
        this.eventWinnerTabEntries = eventWinnerTabEntries;
    }
}
