import { getChannel } from "@/service"
import { useEffect, useState } from "react"

export function useChannel() {
  const [channelList, setChannelList] = useState([])
  // 获取频道列表
  const getChannelList = async () => {
    const res = await getChannel()
    setChannelList(res.data.channels)
  }
  useEffect(() => {
    getChannelList()
  }, [])
  return {channelList}
}