import React from 'react'
import "./About.scss"

import about from "../../Assets/about2.jpg"


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// import LightSpeed from 'react-reveal/LightSpeed';

const About = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div ref={props.about} className="about__container">
        <div className="right">
          <img src={about} alt="" className="about__img" />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="left">
          {/* <LightSpeed right > */}
          <div className="heading">
            ABOUT US
          </div>
          {/* </LightSpeed> */}
          <div className="para">
            <div className="para1"><b><i>We foresee the future, we originate ideas, we love challenges & we create the unbelievable.</i></b> FS Highrise</div>
            <div className="para2">We are a young team of super nerds who love their work. Our modus operandi of ‘invent & innovate’ makes work a joy and challenges seem like play. Saying ‘we love what we do’ would be oversimplifying it because we not just ‘love’ but we ‘live’ for it. With such dedication and passion, no obstacle can slow down our pace. </div>
            <div className="para3">We earn customers and cherish bonds with them, helping them grow their business. Our expertise and ambitions merge together to propel corporations years ahead with disruptive technologies like Blockchain, AI, Digital Transformation, Data Analytics & more.</div>



          </div>
          {/* <LightSpeed right > */}

          <button onClick={handleClickOpen} className="about__btn">Learn More</button>
          {/* </LightSpeed> */}


        </div>

      </div>


      {/* MUI  */}

      <div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, necessitatibus sed! Praesentium officia reiciendis eaque repellat ipsam, quia neque, at corporis quidem perspiciatis rerum. Consectetur tenetur nulla laudantium voluptatibus. Voluptate dicta, quasi ad iusto ea incidunt mollitia ipsum quidem eveniet ut, in pariatur amet corporis maxime odit quos aliquam rem repudiandae culpa doloremque! Tenetur, neque. Voluptatibus nihil culpa odio veniam tempore asperiores! Ex eaque amet facere non. Non dolore labore vero commodi iure tempora voluptatibus, deserunt soluta fugiat. At, neque fugit. Animi id repellendus voluptas? Optio laborum libero, cumque sit deserunt placeat aut sint, nostrum fuga quam eos illum cupiditate molestiae! Dolore aut quam culpa. Repudiandae porro hic maxime ullam cum ducimus? Animi reprehenderit adipisci tempore, quod laborum accusamus alias ipsam corrupti ex fugiat consequatur molestias sed iste sint eos officia nam saepe! Vero quasi totam beatae atque eveniet, accusantium distinctio quae tempora similique modi, esse tempore, sequi sunt veniam non recusandae deleniti magnam deserunt dicta et! Cum quod sapiente nostrum veritatis magni, alias voluptas incidunt quidem repellendus maiores atque excepturi porro illum nobis obcaecati dolorem ab, exercitationem autem enim inventore debitis modi beatae quisquam earum. Commodi optio asperiores blanditiis eveniet debitis saepe totam ut corrupti ullam repellat sed error vitae, dicta assumenda voluptate. Odit natus deserunt expedita quasi quia aliquid aut! Praesentium, iusto. Eius, reiciendis eaque? Quis asperiores maxime eius deserunt! Tenetur alias laborum id magnam ex quisquam fugit accusamus exercitationem corrupti dolorum dolorem, aliquam qui pariatur nisi praesentium corporis vel dicta molestiae quasi minima autem cum. Minima ratione perferendis, iure debitis cupiditate illo doloremque vero accusantium eligendi totam quidem illum tempora autem, nihil sed consequatur saepe dolore aut esse? Molestias ut nisi unde laudantium nobis quisquam, odit officia voluptates laboriosam vero rem. Necessitatibus voluptatem quo corrupti. Nostrum dolore dicta sed sit animi quasi dolorem pariatur ipsum modi atque.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default About