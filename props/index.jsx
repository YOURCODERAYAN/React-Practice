import Card from './components/card'
import cat1 from './cat1.jpg';
import cat2 from './cat2.jpg';
import cat3 from './cat3.jpg';
import cat4 from './cat4.jpg';

import './index.css'

 export default function Index(){

        return(
            <div className="container">
                <Card
            img = {cat1}   
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
                
                
                
                />
                <Card 
            img = {cat2}
            name= " Fluffykins"
            phone= "(212) 555-2345"
            email= "fluff@me.com"
                
                
                />
                <Card 
            img = {cat3}
            name = "Felix"
            phone = "(212) 555-4567"
            email = "thecat@hotmail.com"

                
                />
                <Card 
            img = {cat4}
            name = "Pumpkin"
            phone = "(0800) CAT KING"
            email = "pumpkin@scrimba.com"
                
            />

            </div>
        )
}