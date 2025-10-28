import React from 'react'
import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'


export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar =
    <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
        </Modal>

  return (
    <div>
         <Button className="relative" onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
        Gingerbread biscuit sesame snaps tiramisu macaroon. Cheesecake cookie biscuit chocolate muffin gummies candy canes icing soufflé. Dessert apple pie jelly dessert fruitcake marshmallow pudding. Muffin macaroon dragée tart pie sweet roll pie dessert ice cream. Wafer sugar plum jujubes cupcake cake cake. Tart shortbread sesame snaps icing marshmallow. Cake oat cake powder caramels croissant chocolate icing brownie. Chupa chups chocolate cake halvah cake lemon drops powder jelly beans lemon drops. Candy canes powder lemon drops sugar plum chocolate cake dragée danish sesame snaps chocolate. Marshmallow candy bonbon marzipan tart cotton candy cotton candy gummies. Topping chupa chups carrot cake jujubes marshmallow toffee topping carrot cake. Marzipan donut sesame snaps sugar plum apple pie liquorice carrot cake. Halvah chocolate liquorice apple pie carrot cake bear claw marzipan. Cupcake shortbread sweet chocolate cake marzipan sugar plum caramels cotton candy.
        Candy gingerbread marzipan jelly beans sugar plum fruitcake jelly beans. Carrot cake sesame snaps oat cake wafer halvah. Apple pie marzipan ice cream tart sugar plum. Chupa chups sesame snaps tart jujubes cotton candy carrot cake pastry. Jelly jelly chocolate cake halvah sesame snaps chocolate bear claw. Sugar plum toffee cookie marshmallow croissant gummi bears. Powder marshmallow cheesecake jelly cookie. Cupcake sesame snaps fruitcake ice cream shortbread oat cake dragée marzipan. Cotton candy cookie sweet gummi bears jelly beans. Wafer jelly-o apple pie tart sweet. Gummi bears apple pie ice cream chocolate bar gingerbread cupcake bonbon sesame snaps. Sugar plum jujubes wafer croissant wafer macaroon jelly-o.
        Pie pudding jelly-o lollipop sweet halvah cotton candy marzipan cotton candy. Sesame snaps liquorice bear claw gingerbread cotton candy. Chocolate caramels danish liquorice soufflé candy. Chupa chups chocolate bar tiramisu icing jujubes. Halvah liquorice topping chupa chups tart pie cookie powder danish. Candy canes croissant sugar plum lollipop sweet roll croissant chocolate croissant candy canes. Pudding pie shortbread lollipop tootsie roll dragée oat cake. Pie sugar plum candy liquorice pastry bear claw tootsie roll biscuit shortbread. Tiramisu tart pudding chupa chups jelly jujubes topping tart tootsie roll. Donut jelly dragée sweet icing sweet marshmallow danish. Pastry lemon drops croissant pastry jujubes. Muffin chupa chups carrot cake marshmallow cupcake jelly beans dessert cupcake. Carrot cake dragée apple pie shortbread liquorice macaroon pudding cake.
        Cheesecake halvah cheesecake cake gummi bears marshmallow wafer. Sweet cake fruitcake danish dessert pie ice cream. Chupa chups sweet roll cupcake ice cream cheesecake danish. Liquorice wafer topping cookie chocolate cake marshmallow cupcake. Tart bonbon cotton candy cheesecake gummi bears tart. Chocolate cake dessert pie dragée cake carrot cake oat cake. Cheesecake donut jelly chocolate bar tiramisu carrot cake sweet. Fruitcake pie marshmallow candy macaroon marzipan chocolate. Soufflé dessert jujubes shortbread jelly-o icing tart gingerbread. Soufflé sweet roll carrot cake chupa chups cake sesame snaps lemon drops. Chupa chups gummies cheesecake soufflé powder tiramisu muffin brownie. Cupcake fruitcake cotton candy marshmallow tiramisu. Apple pie sweet roll cake croissant dessert carrot cake sweet powder chocolate bar.
        Lollipop muffin jujubes chocolate macaroon. Oat cake jelly-o cupcake sweet roll caramels. Macaroon oat cake chocolate biscuit ice cream cake lemon drops candy fruitcake. Oat cake sugar plum pie danish croissant cheesecake candy canes. Cake lemon drops ice cream bear claw marzipan donut gummies sweet pastry. Tootsie roll pastry liquorice cotton candy gingerbread fruitcake bear claw lemon drops ice cream. Cheesecake caramels cheesecake lemon drops gummi bears. Marshmallow cookie lemon drops bonbon chocolate bar soufflé marshmallow. Lollipop dessert marshmallow chupa chups powder macaroon gummi bears pudding. Cupcake gummi bears cupcake marzipan tiramisu cookie. Tart carrot cake biscuit soufflé chocolate cake jelly beans donut. Biscuit dessert lemon drops pastry powder jelly beans sesame snaps croissant.
        </p>
    </div>
  )
}
