import { setLocationsAsync } from "./store/reducers/attractionsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ModalCmp from "./cmps/ModalCmp";
import HomePage from "./pages/HomePage";
import Iceland from "./pages/Iceland";
import America from "./pages/America";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./cmps/Navbar/Navbar";
import MobileNavModal from "./cmps/Navbar/MobileNavModal";
import firebase from "./firebase/firebase";

function App() {
  const dispatch = useDispatch();
  const locations = firebase.firestore().collection("test");

  const [mobileModal, setMobileModal] = useState(false);

  const toggleMobileModal = () => {
    mobileModal ? setMobileModal(false) : setMobileModal(true);
  };
  useEffect(() => {
    if (locations) {
      locations.get().then(async (querySnapshot) => {
        const locations = [];
        await querySnapshot.forEach(async (doc) => {
          locations.push(doc.data());
        });
        await dispatch(setLocationsAsync(locations));
      });
    }
  }, [dispatch, locations]);

  return (
    <Router>
      <main
        className={mobileModal ? "app-container modal" : "app-container"}
      >
      {mobileModal && (
    <MobileNavModal toggleMobileModal={toggleMobileModal} />
      )}
      <Navbar toggleMobileModal={toggleMobileModal} />
        <ModalCmp />
        <Switch>
          <Route path="/iceland" component={Iceland} />
          <Route path="/usa" component={America} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
