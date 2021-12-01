import { useContext } from "react";
import { SettingsContext } from "../../context/site";

function Header(props) {

  // pass our context singleton into our useContext hook
  let settings = useContext(SettingsContext);

  return (
    <div>
      <nav>
        <a href={`https://twitter.com/${settings.twitter}`}>
          {settings.twitter}@twitter
        </a>
      </nav>
      <h1>{settings.title}</h1>
    </div>
  )
}

export default Header;
