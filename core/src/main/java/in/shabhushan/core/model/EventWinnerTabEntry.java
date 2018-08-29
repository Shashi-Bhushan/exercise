/*
 * Copyright 2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author Shashi Bhushan
 */
package in.shabhushan.core.model;

import java.util.ArrayList;
import java.util.List;

public class EventWinnerTabEntry {
    private String eventTitle;
    private String eventImage;
    private String eventImageAltText;
    private List<EventWinnerTabEntryItem> eventWinnerTabEntryItems = new ArrayList<>();

    public List<EventWinnerTabEntryItem> getEventWinnerTabEntryItems() {
        return eventWinnerTabEntryItems;
    }

    public void setEventWinnerTabEntryItems(List<EventWinnerTabEntryItem> eventWinnerTabEntryItems) {
        this.eventWinnerTabEntryItems = eventWinnerTabEntryItems;
    }

    public String getEventTitle() {
        return eventTitle;
    }

    public void setEventTitle(String eventTitle) {
        this.eventTitle = eventTitle;
    }

    public String getEventImage() {
        return eventImage;
    }

    public void setEventImage(String eventImage) {
        this.eventImage = eventImage;
    }

    public String getEventImageAltText() {
        return eventImageAltText;
    }

    public void setEventImageAltText(String eventImageAltText) {
        this.eventImageAltText = eventImageAltText;
    }
}
