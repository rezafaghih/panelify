const colMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }
  
  export const GridLayout = ({
    children,
    countOfCols = 4,
    mobileCountOfCols = 1,
    gapX = 0,
    gapY = 0,
    center = true,
  }) => {
    return (
      <div
        className={[
          "w-full grid",
          colMap[mobileCountOfCols],
          `lg:${colMap[countOfCols]}`,
          gapX ? `gap-x-${gapX}` : "",
          gapY ? `gap-y-${gapY}` : "",
          center ? "place-items-center" : "",
        ].join(" ")}
      >
        {children}
      </div>
    )
  }
  