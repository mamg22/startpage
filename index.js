function get_time() 
{
    current_date = new Date();

    minutes = current_date.getMinutes();
    hours   = current_date.getHours();

    minutes = (minutes < 10 ? "0" + minutes : minutes)

    indicator = (hours < 12 ? "am" : "pm")

    hours = (hours < 13 ? hours : hours - 12)

    if (hours == 0) {
        hours = 12
    }

    return hours + ":" + minutes + indicator

}

function update_clock()
{
    document.getElementById("clock").innerText = get_time()
}
