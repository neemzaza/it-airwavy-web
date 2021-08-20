import axios from 'axios';

const ytKey = 'AIzaSyDDKZgyIQHgifSece0uTUd3N5RtUJTsgMc'

const ytUser = 'UCvBnJwjxKxJ4c4mOpzyX3Zg'

export const getSubscriber = () => {
    try {
        axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytUser}&key=${ytKey}`)
        .then(res => {
            // console.log(res.data["items"][0].statistics.subscriberCount)
            return res.data["items"][0].statistics.subscriberCount
        })
    } catch (e) {
        console.error(e)
    }
}

export const totalSubMan = getSubscriber();

export const subCountShorts = () => {
    if (totalSubMan >= 2000) return "2000"
    else if (totalSubMan >= 3000) return "3000"
    else if (totalSubMan >= 5000) return "5000"
    else if (totalSubMan >= 10000) return "10K"
    else if (totalSubMan >= 60000) return "60K"
    else if (totalSubMan >= 100000) return "100K"
    else if (totalSubMan >= 700000) return "700K"
    else if (totalSubMan >= 1000000) return "1M"
    else if (totalSubMan >= 10000000) return "10M"
}
 
export default getSubscriber;
