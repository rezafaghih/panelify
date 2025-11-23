import * as PiIcons from "react-icons/pi"
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"

const iconSets = {
  ...PiIcons,
  ...FaIcons,
  ...MdIcons
}

export function getIconByName(name) {
  return iconSets[name] || null
}
