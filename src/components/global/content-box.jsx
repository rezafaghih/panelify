import { Link } from "react-router-dom"
import { Button, IconButton } from "./buttons"
import { PiPen } from "react-icons/pi"
import { BsEye } from "react-icons/bs"


/**
 * ProductBox Component
 *
 * A flexible and reusable dashboard card component
 * designed for admin panels and management systems.
 *
 * Features:
 * - Optional stats (sales, views, revenue, etc.)
 * - Optional tags (status, category, badges)
 * - Fully customizable actions
 * - Clean and scalable API
 */
export const ProductBox = ({
  image,
  href,
  title,
  description,
  tags = [],
  stats = [],
  actions = [],
}) => {
  return (
    <div className="w-72  relative rounded-xl overflow-hidden bg-(--sidebar-bg) flex flex-col">
      
      {/* Product Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full mx-auto"
        />
      )}

      {/* Title */}
      {title && (
        <Link
          to={href}
          dir="rtl"
          className="font-bold px-3 text-lg my-2 text-right"
        >
          {title}
        </Link>
      )}

      {/* Description */}
      {description && (
        <p
          dir="rtl"
          className="text-sm px-3 text-gray-400 line-clamp-2 mb-3"
        >
          {description}
        </p>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="absolute  left-4 top-4 flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-2xl border backdrop-blur bg-${tag.color}-500/20 border-${tag.color}-600 text-${tag.color}-700`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      {/* Stats Section */}
      {stats.length > 0 && (
        <div className="flex px-3 flex-col gap-2 mt-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className="flex p-3 gap-2 mt-4">
          {actions.map((action, index) => (
            <IconButton
              key={index}
              color={action.color}
              icon={action.icon}
              onClick={action.onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export const TicketBox = ()=>{

}
