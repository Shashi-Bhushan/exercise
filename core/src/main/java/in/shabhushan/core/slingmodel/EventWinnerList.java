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
public class EventWinnerList {
    @Inject
    private String title;

    @Inject
    private List<EventWinnerListTab> tab;

    public String getTitle() {
        return title;
    }

    public List<EventWinnerListTab> getTab() {
        return tab;
    }
}
