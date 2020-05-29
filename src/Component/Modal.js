import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./list.css";

import Movieli from "./Movieli";

function Example(props) {
  const [list, setList] = useState([
    {
      Title: "sonic",
      Image:
        "https://fr.web.img3.acsta.net/pictures/20/02/10/17/16/0746079.jpg",
      Descr: "desc",
      Rating: "3",
    },
    {
      Title: "Innvisible Man",
      Image:
        "https://fr.web.img6.acsta.net/pictures/20/02/10/13/26/1423227.jpg",
      Descr: "desc2",
      Rating: "5",
    },
  ]);
  const [listtrier, setListtrier] = useState(list);
  const [listsearch, setListsearch] = useState(list);
  const [vide, setVide] = useState(true);
  const [etoileappuer, setEtoileappuer] = useState(false);
  const [searchbyrate, setSearchbyrate] = useState(list);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addmovie = () => {
    let inter = {};
    Object.assign(inter, {
      Title: document.getElementById("newtitle").value,
      Image: document.getElementById("newimg").value,
      Descr: document.getElementById("newdesc").value,
      Rating: document.getElementById("newrating").value,
    });

    //console.log(inter)

    setList([...list, inter]);

    //props.list(list)
    setShow(false);

    // console.log(Array.isArray(list))
  };
  const trier = () => {
    setListtrier([list.sort((a, b) => (a.Rating < b.Rating ? 1 : -1))]);
  };
  const trierparnom = () => {
    setListtrier([list.sort((a, b) => (a.Title > b.Title ? 1 : -1))]);
  };
  const search = (e) => {
    let tab = [];
    console.log(etoileappuer);
    if (etoileappuer)
      tab = searchbyrate.filter((el) =>
        el.Title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    else
      tab = list.filter((el) =>
        el.Title.toLowerCase().includes(e.target.value.toLowerCase())
      );

    console.log(e.target.value);

    setListsearch(tab);
    console.log(listsearch);
    if (e.target.value.length > 0) setVide(false);
    else setVide(true);
  };

  const searchrating = (e) => {
    let tab2 = [];
    let x = e.target.value;
    if (vide) tab2 = list.filter((e) => e.Rating == x);
    else tab2 = listsearch.filter((e) => e.Rating == x);
    setSearchbyrate(tab2);
    setEtoileappuer(true);
  };

  return (
    <>
      <div className="boutton" onChange={search} /* onClick={search} */>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>

        <input id="search" placeholder="Rechercher..."></input>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  value="1"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="1"
                  onClick={searchrating}
                  height="16px"
                ></input>
              </td>

              <td>
                <input
                  value="2"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="2"
                  onClick={searchrating}
                  height="16px"
                ></input>
              </td>
              <td>
                <input
                  value="3"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="3"
                  onClick={searchrating}
                  height="16px"
                ></input>
              </td>
              <td>
                <input
                  value="4"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="4"
                  onClick={searchrating}
                  height="16px"
                ></input>
              </td>
              <td>
                <input
                  value="5"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="5"
                  onClick={searchrating}
                  height="16px"
                ></input>
              </td>
              <td>
                <input
                  value="x"
                  type="image"
                  src="https://lh3.googleusercontent.com/proxy/KywdUr6Vv3lQiOGJxp23Ix44a-0yzlisOOPz9Uygb52V7l7w6xmZhaWV6QbPD2UoKnSsfTVILSwsaImcie01zptn4Z52VHiqO02lsTRHe6ElL-TkXYfyrsCf6Q"
                  alt="x"
                  onClick={() => setEtoileappuer(false)}
                  height="20px"
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={trier}> Tri par Rating</button>
      <button onClick={trierparnom}>Tri par Nom</button>

      <Movieli
        list={
          (vide && !etoileappuer) ? list : (!vide && !etoileappuer)  ? listsearch :(!vide && etoileappuer) ? listsearch: searchbyrate
        }
      ></Movieli>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ alignItems: "center" }}>
            <table>
              {" "}
              <tbody>
                <tr>
                  {" "}
                  <td>
                    {" "}
                    <span> Title :</span>
                  </td>{" "}
                  <td>
                    <input id="newtitle"></input>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td>
                    {" "}
                    <span>URL Img :</span>
                  </td>{" "}
                  <td>
                    <input id="newimg"></input>{" "}
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    {" "}
                    <span> Description :</span>
                  </td>{" "}
                  <td>
                    {" "}
                    <input id="newdesc"></input>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td>
                    <span> Rating :</span>{" "}
                  </td>{" "}
                  <td>
                    {" "}
                    <select id="newrating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);
export default Example;
