
/**
 * use this component for icon buttons (like search button or profile)
 * @param {*} param0 
 * @returns 
 */
export const FadeTransitionButton = ({children, onClick = null})=>{
    return (
        <div onClick={onClick} className="
        relative
        transition-all 
        cursor-pointer
        flex items-center justify-center
        before:transition-all
        hover:before:opacity-10
        before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500 before:rounded-full
        before:opacity-0
    ">
        {children}
    </div>
    
    )
}