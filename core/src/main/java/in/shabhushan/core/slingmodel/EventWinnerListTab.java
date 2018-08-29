package in.shabhushan.core.slingmodel;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;
import java.util.List;

/**
 * @author Shashi Bhushan
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy= DefaultInjectionStrategy.OPTIONAL)
public class EventWinnerListTab {

    @Inject
    private String title;

    @Inject
    private String subtitle;

    @Inject
    private List<EventWinnerListTabEntry> tabEntry;

    public String getTitle() {
        return title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public List<EventWinnerListTabEntry> getTabEntry() {
        return tabEntry;
    }
}
