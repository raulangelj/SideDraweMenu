import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faRocket, faAddressCard, faCode, faMoon } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <div className="content">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="d" className="nav-link">
              <span className="link-text">Raul Jimenez</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-3x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faCat} size="2x" className="nav-icon" />
              <span className="link-text">CatsAni</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faRocket} size="2x" className="nav-icon" />
              <span className="link-text">Rocket</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faAddressCard} size="2x" className="nav-icon" />
              <span className="link-text">Addres</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faCode} size="2x" className="nav-icon" />
              <span className="link-text">Code</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faMoon} size="2x" className="nav-icon" />
              <span className="link-text">Theme</span>
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <h1>Prueba de navBar</h1>
        <p>
          Navigation Bars
          Having easy-to-use navigation is important for any web site.
          
          With CSS you can transform boring HTML menus into good-looking navigation bars.
          
          Navigation Bar = List of Links
          A navigation bar needs standard HTML as a base.
          
          In our examples we will build the navigation bar from a standard HTML list.
          
          A navigation bar is basically a list of links, so using the ul and li elements makes perfect sense:

          Navbar
          Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

          How it works
          Here’s what you need to know before getting started with the navbar:

          Navbars require a wrapping .navbar with .navbar-expand-sm|-md|-lg|-xl for responsive collapsing and color scheme classes.
          Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
          Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
          Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
          Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the .navbar. See the display utility class.
          Ensure accessibility by using a nav element or, if using a more generic element such as a div, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
          Read on for an example and list of supported sub-components.

          Supported content
          Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

          .navbar-brand for your company, product, or project name.
          .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
          .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
          .form-inline for any form controls and actions.
          .navbar-text for adding vertically centered strings of text.
          .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.
          Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

                    What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          Navigation Bars
          Having easy-to-use navigation is important for any web site.
          
          With CSS you can transform boring HTML menus into good-looking navigation bars.
          
          Navigation Bar = List of Links
          A navigation bar needs standard HTML as a base.
          
          In our examples we will build the navigation bar from a standard HTML list.
          
          A navigation bar is basically a list of links, so using the ul and li elements makes perfect sense:

          Navbar
          Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

          How it works
          Here’s what you need to know before getting started with the navbar:

          Navbars require a wrapping .navbar with .navbar-expand-sm|-md|-lg|-xl for responsive collapsing and color scheme classes.
          Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
          Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
          Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
          Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the .navbar. See the display utility class.
          Ensure accessibility by using a nav element or, if using a more generic element such as a div, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
          Read on for an example and list of supported sub-components.

          Supported content
          Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

          .navbar-brand for your company, product, or project name.
          .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
          .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
          .form-inline for any form controls and actions.
          .navbar-text for adding vertically centered strings of text.
          .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.
          Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

                    What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

          Navigation Bars
          Having easy-to-use navigation is important for any web site.
          
          With CSS you can transform boring HTML menus into good-looking navigation bars.
          
          Navigation Bar = List of Links
          A navigation bar needs standard HTML as a base.
          
          In our examples we will build the navigation bar from a standard HTML list.
          
          A navigation bar is basically a list of links, so using the ul and li elements makes perfect sense:

          Navbar
          Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

          How it works
          Here’s what you need to know before getting started with the navbar:

          Navbars require a wrapping .navbar with .navbar-expand-sm|-md|-lg|-xl for responsive collapsing and color scheme classes.
          Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
          Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
          Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
          Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the .navbar. See the display utility class.
          Ensure accessibility by using a nav element or, if using a more generic element such as a div, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
          Read on for an example and list of supported sub-components.

          Supported content
          Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

          .navbar-brand for your company, product, or project name.
          .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
          .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
          .form-inline for any form controls and actions.
          .navbar-text for adding vertically centered strings of text.
          .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.
          Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

                    What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          Navigation Bars
          Having easy-to-use navigation is important for any web site.
          
          With CSS you can transform boring HTML menus into good-looking navigation bars.
          
          Navigation Bar = List of Links
          A navigation bar needs standard HTML as a base.
          
          In our examples we will build the navigation bar from a standard HTML list.
          
          A navigation bar is basically a list of links, so using the ul and li elements makes perfect sense:

          Navbar
          Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

          How it works
          Here’s what you need to know before getting started with the navbar:

          Navbars require a wrapping .navbar with .navbar-expand-sm|-md|-lg|-xl for responsive collapsing and color scheme classes.
          Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
          Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
          Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
          Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the .navbar. See the display utility class.
          Ensure accessibility by using a nav element or, if using a more generic element such as a div, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
          Read on for an example and list of supported sub-components.

          Supported content
          Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

          .navbar-brand for your company, product, or project name.
          .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
          .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
          .form-inline for any form controls and actions.
          .navbar-text for adding vertically centered strings of text.
          .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.
          Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

                    What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          Navigation Bars
          Having easy-to-use navigation is important for any web site.
          
          With CSS you can transform boring HTML menus into good-looking navigation bars.
          
          Navigation Bar = List of Links
          A navigation bar needs standard HTML as a base.
          
          In our examples we will build the navigation bar from a standard HTML list.
          
          A navigation bar is basically a list of links, so using the ul and li elements makes perfect sense:

          Navbar
          Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

          How it works
          Here’s what you need to know before getting started with the navbar:

          Navbars require a wrapping .navbar with .navbar-expand-sm|-md|-lg|-xl for responsive collapsing and color scheme classes.
          Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
          Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
          Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
          Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the .navbar. See the display utility class.
          Ensure accessibility by using a nav element or, if using a more generic element such as a div, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
          Read on for an example and list of supported sub-components.

          Supported content
          Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

          .navbar-brand for your company, product, or project name.
          .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
          .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
          .form-inline for any form controls and actions.
          .navbar-text for adding vertically centered strings of text.
          .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.
          Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

                    What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          Navigation Bars
          Having easy-to-use navigation is important for any web site.
          
          With CSS you can transform boring HTML menus into good-looking navigation bars.
          
          Navigation Bar = List of Links
          A navigation bar needs standard HTML as a base.
          
          In our examples we will build the navigation bar from a standard HTML list.
          
          A navigation bar is basically a list of links, so using the ul and li elements makes perfect sense:

          Navbar
          Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

          How it works
          Here’s what you need to know before getting started with the navbar:

          Navbars require a wrapping .navbar with .navbar-expand-sm|-md|-lg|-xl for responsive collapsing and color scheme classes.
          Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
          Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
          Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
          Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the .navbar. See the display utility class.
          Ensure accessibility by using a nav element or, if using a more generic element such as a div, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
          Read on for an example and list of supported sub-components.

          Supported content
          Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

          .navbar-brand for your company, product, or project name.
          .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
          .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
          .form-inline for any form controls and actions.
          .navbar-text for adding vertically centered strings of text.
          .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.
          Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

                    What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </main>
    </div>
  );
}

export default App;
