export const CountryDisplayListItem = ({
  description,
  listItem,
  country,
  clickable = false,
}) => {
  return (
    <tr>
      <th>{description}:</th>
      {typeof listItem === "object" && (
        <td>
          {listItem.map((item, index) => {
            return (
              <p key={`${country}${listItem}${description}${index}`}>
                {clickable ? (
                  <a target="_blank" href={item}>
                    {item}
                  </a>
                ) : (
                  <>{item}</>
                )}
              </p>
            );
          })}
        </td>
      )}
      {typeof listItem === "string" && (
        <td>
          {clickable ? (
            <a target="_blank" href={listItem}>
              {listItem}
            </a>
          ) : (
            <p>{listItem}</p>
          )}
        </td>
      )}
    </tr>
  );
};
