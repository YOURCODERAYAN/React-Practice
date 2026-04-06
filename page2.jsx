/*Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import reactimg1 from "./React.png";

function Page2(){

        return(
        <>
        <header>
                <img  width="40px" src={reactimg1}/>
        </header>

        <main>
        <h1>
                Reasons I'm exicited to learn React
        </h1>

        <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci doloribus et accusantium sapiente. Debitis.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deserunt?</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti.</li>

        </ol>
            </main>
        

        <footer>
               <small>© 2020 Ziroll development. All rights reserved.</small>
        </footer>
        </>
        
        )
}

export default Page2;
