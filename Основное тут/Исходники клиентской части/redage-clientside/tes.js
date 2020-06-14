let g_swapDate = Date.now();
let g_triggersCount = 0;

mp._events.add("cefTrigger", (eventName) => {

    if(++g_triggersCount > 20)
    {
        let currentDate = Date.now();

        if ((currentDate - g_swapDate) > 300)
        {
            g_swapDate = currentDate;
            g_triggersCount = 0;
        }
        else
        {
            return true;
        }
    }
}