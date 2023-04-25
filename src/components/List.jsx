import React from "react";

const List = ({ entries, handleDelete, handleEdit }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Sectors</th>
          <th>Actions</th>
        </tr>
        {entries.length > 0 &&
          entries?.map((entry) => (
            <tr>
              <td>{entry.name}</td>
              <td>{entry?.name}</td>
              <td>
                <div className="action-btns">
                  <button onClick={() => handleEdit(entry)}>Edit</button>
                  <button onClick={() => handleDelete(entry.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default List;
