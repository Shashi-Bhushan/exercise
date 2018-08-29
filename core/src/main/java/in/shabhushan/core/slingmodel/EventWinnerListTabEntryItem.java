package in.shabhushan.core.slingmodel;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

/**
 * @author Shashi Bhushan
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy= DefaultInjectionStrategy.OPTIONAL)
public class EventWinnerListTabEntryItem {
    @Inject
    private String name;

    @Inject
    private String position;

    public String getName() {
        return name;
    }

    public String getPosition() {
        return position;
    }
}
