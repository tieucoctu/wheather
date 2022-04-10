import React from "react";
import cities from "../../lib/city/city.list.json";
import Link from "next/link";
import Router from "next/router";
import styles from "./SearchBox.module.scss"

export default function SearchBox({ placehorder }) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const clearQuery = () => setQuery("");
    Router.events.on("routeChangeComplete", clearQuery);

    return () => {
      Router.events.off("routeChangeComplete", clearQuery);
    };
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };

          matchingCities.push(cityData);
          continue;
        }
      }
    }
    return setResults(matchingCities);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder={placehorder ? placehorder : "Search for a city..."}
      />
      {query.length > 3 && (
        <ul>
          {results.length > 0 ? (
            results.map((city,index) => {
              return (
                <li key={city.slug}>
                  <Link href={`/location/${city.slug}`}>
                    <a>
                      {city.name}
                      {city.state ? `,${city.state}` : ""}{" "}
                    </a>
                  </Link>
                </li>
              );
            })
          ) : (
            <li className={styles.search__no_results}>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
