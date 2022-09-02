import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import CountryDetail  from "./components/country-detail/country-detail.component"

import "./App.css";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="detail" element={<CountryDetail />} />
    </Route>
   </Routes>
  );
}

export default App;

{/* <div className="App">
<Home />
</div> */}
// - See all countries from the API on the homepage
// - Search for a country using an `input` field
// - Filter countries by region
// - Click on a country to see more detailed information on a separate page
// - Click through to the border countries on the detail page
// - Toggle the color scheme between light and dark mode *(optional)*
