import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
  apiKey: "AIzaSyBi-FX65uWv3puJ0Va8u-B9ci-79TBmnuc",
  authDomain: "mrdonalds-18c53.firebaseapp.com",
  databaseURL: "https://mrdonalds-18c53-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-18c53",
  storageBucket: "mrdonalds-18c53.appspot.com",
  messagingSenderId: "854809041287",
  appId: "1:854809041287:web:98a3a4986ad62577775b22"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={firebase.database}
      />
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      
    </>
    
  );
}

export default App;
