// Task is we have to make separate custom components //
// and from there we have to render things in this page3 //
// the components are header , footer , main , etc ... //

import Header from "./header.jsx";
import Content from "./content.jsx";
import Footer from "./footer.jsx";

function Page3(){

        return(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
}

export default Page3;