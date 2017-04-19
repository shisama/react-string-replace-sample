import React from "react";
import reactStringReplace from "react-string-replace";

const ItemList = ["https://www.google.com", "www.gentoo.org", "link to http://www.yahoo.com", "http://www.google.com"];
const regExp = /(https?:\/\/\S+)/g;

export default class ListView extends React.Component {
  render() {
    return (
      <div>
        <ul>
        {ItemList.map((item) => {
          return (
            <li>
              {reactStringReplace(item, regExp, (match, i) => (
                <a href={match}>{match}</a>
              ))}
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}