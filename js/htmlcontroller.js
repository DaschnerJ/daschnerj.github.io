var username = "test";
var token = null;

function loadContent(document, id) {
    if (username != null) {
        document.getElementById(id).innerHTML = "  " +
            getServices() +
            getQuote() +
            getStats() +
            getAboutUs() +
            getPortfolio() +
            getPricingSection() +
            getTestimonials() +
            getBlog() +
            getMapWrapper() +
            getMap() +
            getContact() +
            getFooter();
    }
}

function getFooter()
{
    return "<div id=\"footer-wrapper\">\n" +
        "        <section id=\"bottom\" class=\"\">\n" +
        "            <div class=\"container\">\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col-md-3 col-sm-6 about-us-widget\">\n" +
        "                        <h4>Global Coverage</h4>\n" +
        "                        <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin.</p>\n" +
        "                    </div><!--/.col-md-3-->\n" +
        "\n" +
        "                    <div class=\"col-md-3 col-sm-6\">\n" +
        "                        <h4>Company</h4>\n" +
        "                        <div>\n" +
        "                            <ul class=\"arrow\">\n" +
        "                                <li><a href=\"#\">Company Overview</a></li>\n" +
        "                                <li><a href=\"#\">Meet The Team</a></li>\n" +
        "                                <li><a href=\"#\">Our Awesome Partners</a></li>\n" +
        "                                <li><a href=\"#\">Our Services</a></li>\n" +
        "                            </ul>\n" +
        "                        </div>\n" +
        "                    </div><!--/.col-md-3-->\n" +
        "\n" +
        "                    <div class=\"col-md-3 col-sm-6\">\n" +
        "                        <h4>Latest Articles</h4>\n" +
        "                        <div>\n" +
        "                            <div class=\"media\">\n" +
        "                                <div class=\"pull-left\">\n" +
        "                                    <img class=\"widget-img\" src=\"images/portfolio/folio01.jpg\" alt=\"\">\n" +
        "                                </div>\n" +
        "                                <div class=\"media-body\">\n" +
        "                                    <span class=\"media-heading\"><a href=\"#\">Blog Post A</a></span>\n" +
        "                                    <small class=\"muted\">Posted 14 April 2014</small>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"media\">\n" +
        "                                <div class=\"pull-left\">\n" +
        "                                    <img class=\"widget-img\" src=\"images/portfolio/folio02.jpg\" alt=\"\">\n" +
        "                                </div>\n" +
        "                                <div class=\"media-body\">\n" +
        "                                    <span class=\"media-heading\"><a href=\"#\">Blog Post B</a></span>\n" +
        "                                    <small class=\"muted\">Posted 14 April 2014</small>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>  \n" +
        "                    </div><!--/.col-md-3-->\n" +
        "\n" +
        "                    <div class=\"col-md-3 col-sm-6\">\n" +
        "                        <h4>Come See Us</h4>\n" +
        "                        <address>\n" +
        "                            <strong>Ace Towers</strong><br>\n" +
        "                            New York Ave,<br>\n" +
        "                            New York, 215648<br>\n" +
        "                            <abbr title=\"Phone\"><i class=\"fa fa-phone\"></i></abbr> 546 840654 05\n" +
        "                        </address>\n" +
        "                    </div> <!--/.col-md-3-->\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </section><!--/#bottom-->\n" +
        "\n" +
        "        <footer id=\"footer\" class=\"\">\n" +
        "            <div class=\"container\">\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col-sm-6\">\n" +
        "                        &copy; 2014 <a target=\"_blank\" href=\"http://www.distinctivethemes.com\" title=\"Premium Themes and Templates\">Distinctive Themes</a>. All Rights Reserved.\n" +
        "                    </div>\n" +
        "                    <div class=\"col-sm-6\">\n" +
        "                        <ul class=\"pull-right\">\n" +
        "                            <li><a id=\"gototop\" class=\"gototop\" href=\"#\"><i class=\"fa fa-chevron-up\"></i></a></li><!--#gototop-->\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </footer><!--/#footer-->\n" +
        "    </div>";
}

function getContact()
{
    if(name != null)
        return "            <section id=\"contact\" class=\"white\">\n" +
            "                <div class=\"container\">\n" +
            "                \t<div class=\"gap\"></div>\n" +
            "                    <div class=\"center gap fade-down section-heading\">\n" +
            "                        <h2 class=\"main-title\">Get In Touch</h2>\n" +
            "                        <hr>\n" +
            "                        <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
            "                    </div>    \n" +
            "                    <div class=\"gap\"></div>\n" +
            "                    <div class=\"row\">\n" +
            "                        <div class=\"col-md-4 fade-up\">\n" +
            "                            <h3>Contact Information</h3>\n" +
            "                            <p><span class=\"icon icon-home\"></span>Time Square, New York<br/>\n" +
            "                                <span class=\"icon icon-phone\"></span>+36 65984 405<br/>\n" +
            "                                <span class=\"icon icon-mobile\"></span>+36 65984 405<br/>\n" +
            "                                <span class=\"icon icon-envelop\"></span> <a href=\"#\">email@infinityteam.com</a> <br/>\n" +
            "                                <span class=\"icon icon-twitter\"></span> <a href=\"#\">@infinityteam.com</a> <br/>\n" +
            "                                <span class=\"icon icon-facebook\"></span> <a href=\"#\">Infinity Agency</a> <br/>\n" +
            "                            </p>\n" +
            "                        </div><!-- col -->\n" +
            "                    \n" +
            "                        <div class=\"col-md-8 fade-up\">\n" +
            "                            <h3>Drop Us A Message</h3>\n" +
            "                            <br>\n" +
            "                            <br>\n" +
            "                            <div id=\"message\"></div>\n" +
            "                            <form method=\"post\" action=\"sendemail.php\" id=\"contactform\">\n" +
            "                                <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Name\" />\n" +
            "                                <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\" />\n" +
            "                                <input type=\"text\" name=\"website\" id=\"website\" placeholder=\"Website\" />\n" +
            "                                <textarea name=\"comments\" id=\"comments\" placeholder=\"Comments\"></textarea>\n" +
            "                                <input class=\"btn btn-outlined btn-primary\" type=\"submit\" name=\"submit\" value=\"Submit\" />\n" +
            "                            </form>\n" +
            "                        </div><!-- col -->\n" +
            "                    </div><!-- row -->  \n" +
            "                    <div class=\"gap\"></div>         \n" +
            "                </div>\n" +
            "            </section>";
    else return "";
}
    function getMap()
    {
        return "\t\t\t\t<div id=\"map\"></div>\n";
    }

    function getMapWrapper()
    {
        return "\t\t\t<div id=\"mapwrapper\">\n" + "\t\t\t</div>\n" + "\n";
    }

    function getTestimonials()
    {
        if(name != null)
            return "            <section id=\"testimonial-carousel\" class=\"divider-section\">\n" +
                "            <div class=\"gap\"></div>\n" +
                "\t            <div class=\"container\">\n" +
                "\t                <div class=\"row\">\n" +
                "                    \t<div class=\"center gap fade-down section-heading\">\n" +
                "                            <h2 class=\"main-title\">What They Have Been Saying</h2>\n" +
                "                            <hr>\n" +
                "                            <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
                "                            <div class=\"gap\"></div>\n" +
                "                        </div>                         \n" +
                "\t                    <div class='col-md-offset-2 col-md-8 fade-up'>\n" +
                "\t                        <div class=\"carousel slide\" data-ride=\"carousel\" id=\"quote-carousel\">\n" +
                "\t                            <!-- Bottom Carousel Indicators -->\n" +
                "\t                            <ol class=\"carousel-indicators\">\n" +
                "\t                                <li data-target=\"#quote-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
                "\t                                <li data-target=\"#quote-carousel\" data-slide-to=\"1\"></li>\n" +
                "\t                                <li data-target=\"#quote-carousel\" data-slide-to=\"2\"></li>\n" +
                "\t                            </ol>                                \n" +
                "\t                            <!-- Carousel Slides / Quotes -->\n" +
                "\t                            <div class=\"carousel-inner\">                                \n" +
                "\t                              <!-- Quote 1 -->\n" +
                "\t                                <div class=\"item active\">\n" +
                "\t                                    <blockquote>\n" +
                "\t                                        <div class=\"row\">\n" +
                "\t                                            <div class=\"col-sm-3 text-center\">\n" +
                "\t                                                <img class=\"img-responsive\" src=\"images/team/team01.jpg\" style=\"width: 100px;height:100px;\">\n" +
                "\t                                            </div>\n" +
                "\t                                            <div class=\"col-sm-9\">\n" +
                "\t                                                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>\n" +
                "\t                                                <small>Someone famous</small>\n" +
                "\t                                            </div>\n" +
                "\t                                        </div>\n" +
                "\t                                    </blockquote>\n" +
                "\t                                </div>\n" +
                "\t                                <!-- Quote 2 -->\n" +
                "\t                                <div class=\"item\">\n" +
                "\t                                    <blockquote>\n" +
                "\t                                        <div class=\"row\">\n" +
                "\t                                            <div class=\"col-sm-3 text-center\">\n" +
                "\t                                                <img class=\"img-responsive\" src=\"images/team/team02.jpg\" style=\"width: 100px;height:100px;\">\n" +
                "\t                                            </div>\n" +
                "\t                                            <div class=\"col-sm-9\">\n" +
                "\t                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>\n" +
                "\t                                                <small>Someone famous</small>\n" +
                "\t                                            </div>\n" +
                "\t                                        </div>\n" +
                "\t                                    </blockquote>\n" +
                "\t                                </div>\n" +
                "\t                                <!-- Quote 3 -->\n" +
                "\t                                <div class=\"item\">\n" +
                "\t                                    <blockquote>\n" +
                "\t                                        <div class=\"row\">\n" +
                "\t                                            <div class=\"col-sm-3 text-center\">\n" +
                "\t                                                <img class=\"img-responsive\" src=\"images/team/team03.jpg\" style=\"width: 100px;height:100px;\">\n" +
                "\t                                            </div>\n" +
                "\t                                            <div class=\"col-sm-9\">\n" +
                "\t                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>\n" +
                "\t                                                <small>Someone famous</small>\n" +
                "\t                                            </div>\n" +
                "\t                                        </div>\n" +
                "\t                                    </blockquote>\n" +
                "\t                                </div>\n" +
                "\t                            </div>                                     \n" +
                "\t                        </div> \n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\t                <div class=\"gap\"></div>\n" +
                "\t      \t\t</div>\n" +
                "      \t\t</section>\n" +
                "\n";
        else return "";
    }

    function getPortfolio()
    {
        if(name != null)
        {
            return  "        <section id=\"portfolio\" class=\"white\">\n" +
                "       \t\t<div class=\"container\">\n" +
                "\t        \t<div class=\"gap\"></div> \n" +
                "\t\t        \t<div class=\"center gap fade-down section-heading\">\n" +
                "\t\t                <h2 class=\"main-title\">Examples Of Excellence</h2>\n" +
                "\t\t                <hr>\n" +
                "\t\t                <p>She evil face fine calm have now. Separate screened he outweigh of distance landlord.</p>\n" +
                "\t\t            </div> \n" +
                "<ul class=\"portfolio-filter fade-down center\">\n" +
                "                        <li><a class=\"btn btn-outlined btn-primary active\" href=\"#\" data-filter=\"*\">All</a></li>\n" +
                "                        <li><a class=\"btn btn-outlined btn-primary\" href=\"#\" data-filter=\".apps\">Apps</a></li>\n" +
                "                        <li><a class=\"btn btn-outlined btn-primary\" href=\"#\" data-filter=\".nature\">Nature</a></li>\n" +
                "                        <li><a class=\"btn btn-outlined btn-primary\" href=\"#\" data-filter=\".design\">Design</a></li>\n" +
                "                    </ul><!--/#portfolio-filter-->\n" +
                "\n" +
                "                    <ul class=\"portfolio-items col-3 isotope fade-up\">\n" +
                "                        <li class=\"portfolio-item apps isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio01.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio01.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>             \n" +
                "                                </div>           \n" +
                "                            </div>           \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item joomla nature isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio02.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio02.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>              \n" +
                "                                </div>           \n" +
                "                            </div>           \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item bootstrap design isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio03.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio03.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>        \n" +
                "                                </div>           \n" +
                "                            </div>           \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item joomla design apps isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio04.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio04.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>          \n" +
                "                                </div>           \n" +
                "                            </div>           \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item joomla apps isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio05.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio05.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>          \n" +
                "                                </div>    \n" +
                "                            </div>       \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item wordpress nature isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio06.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio06.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>           \n" +
                "                                </div>           \n" +
                "                            </div>           \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item joomla design apps isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio07.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio07.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>          \n" +
                "                                </div>           \n" +
                "                            </div>           \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item joomla nature isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio08.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio08.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>          \n" +
                "                                </div>    \n" +
                "                            </div>       \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                        <li class=\"portfolio-item wordpress design isotope-item\">\n" +
                "                            <div class=\"item-inner\">\n" +
                "                                <img src=\"images/portfolio/folio09.jpg\" alt=\"\">\n" +
                "                                <h5>Portfolio Project</h5>\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/portfolio/folio09.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>           \n" +
                "                                </div>           \n" +
                "                            </div>           \n" +
                "                        </li><!--/.portfolio-item-->\n" +
                "                    </ul>\n" +
                "                </div>\n" +
                "            </section>\n" +
                "\n";
        }
        else return "";
    }

    function getStats()
    {
        if(name != null) {
            return "        <section id=\"stats\" class=\"divider-section\">\n" +
                "            <div class=\"gap\"></div>\n" +
                "            <div class=\"container\">\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col-md-3 col-xs-6\">\n" +
                "                        <div class=\"center bounce-in\">\n" +
                "                            <span class=\"stat-icon\"><span class=\"pe-7s-timer bounce-in\"></span></span>\n" +
                "                            <h1><span class=\"counter\">246000</span></h1>\n" +
                "                            <h3>HOURS SAVED</h3>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-md-3 col-xs-6\">\n" +
                "                        <div class=\"center bounce-in\">\n" +
                "                            <span class=\"stat-icon\"><span class=\"pe-7s-light bounce-in\"></span></span>\n" +
                "                            <h1><span class=\"counter\">16875</span></h1>\n" +
                "                            <h3>FRESH IDEAS</h3>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-md-3 col-xs-6\">\n" +
                "                        <div class=\"center bounce-in\">\n" +
                "                            <span class=\"stat-icon\"><span class=\"pe-7s-graph1 bounce-in\"></span></span>\n" +
                "                            <h1><span class=\"counter\">99999999</span></h1>\n" +
                "                            <h3>HUGE PROFIT</h3>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-md-3 col-xs-6\">\n" +
                "                        <div class=\"center bounce-in\">\n" +
                "                            <span class=\"stat-icon\"><span class=\"pe-7s-box2 bounce-in\"></span></span>\n" +
                "                            <h1><span class=\"counter\">54875</span></h1>\n" +
                "                            <h3>THINGS IN BOXES</h3>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"gap\"></div> \n" +
                "        </section>\n" +
                "\n";
        }
        else return "";
    }

    function getBlog()
    {
        if(name != null)
        {
            return "            <section id=\"blog\" class=\"white\">\n" +
                "                <div class=\"container\">\n" +
                "                    <div class=\"center gap fade-down section-heading\">\n" +
                "                   \t\t<div class=\"gap\"></div>\n" +
                "                        <h2 class=\"main-title\">From The Blog</h2>\n" +
                "                        <hr>\n" +
                "                        <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
                "                    </div>  \n" +
                "                    <div class=\"gap\"></div>\n" +
                "                    <div class=\"row\">\n" +
                "\t                    <div class=\"col-md-4\">\n" +
                "\t                        <div class=\"post\">\n" +
                "\t                            <div class=\"post-img-content\">\n" +
                "\t                                <img src=\"images/portfolio/folio02.jpg\" class=\"img-responsive\" />\n" +
                "\t                                <div class=\"overlay\">\n" +
                "\t                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"#\"><i class=\"fa fa-link\"></i></a>          \n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                            <div class=\"content\">\n" +
                "\t                                <h2 class=\"post-title\">Post Title</h2>\n" +
                "\t                                <div class=\"author\">\n" +
                "\t                                    <i class=\"fa fa-user\"></i> By <b>Author</b> | <i class=\"fa fa-clock-o\"></i> <time datetime=\"2014-01-20\">April 11th, 2014</time>\n" +
                "\t                                </div>\n" +
                "\t                                <div>\n" +
                "\t                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
                "\t                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
                "\t                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
                "\t                                </div>\n" +
                "\t                                <div class=\"read-more-wrapper\">\n" +
                "\t                                    <a href=\"#\" class=\"btn btn-outlined btn-primary\">Read more</a>\n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                    <div class=\"col-md-4\">\n" +
                "\t                        <div class=\"post\">\n" +
                "\t                            <div class=\"post-img-content\">\n" +
                "\t                                <img src=\"images/portfolio/folio06.jpg\" class=\"img-responsive\" />\n" +
                "\t                                <div class=\"overlay\">\n" +
                "\t                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"#\"><i class=\"fa fa-link\"></i></a>          \n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                            <div class=\"content\">\n" +
                "\t                                <h2 class=\"post-title\">Post Title</h2>\n" +
                "\t                                <div class=\"author\">\n" +
                "\t                                    <i class=\"fa fa-user\"></i> By <b>Author</b> | <i class=\"fa fa-clock-o\"></i> <time datetime=\"2014-01-20\">April 11th, 2014</time>\n" +
                "\t                                </div>\n" +
                "\t                                <div>\n" +
                "\t                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
                "\t                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
                "\t                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
                "\t                                </div>\n" +
                "\t                                <div class=\"read-more-wrapper\">\n" +
                "\t                                    <a href=\"#\" class=\"btn btn-outlined btn-primary\">Read more</a>\n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                    <div class=\"col-md-4\">\n" +
                "\t                        <div class=\"post\">\n" +
                "\t                            <div class=\"post-img-content\">\n" +
                "\t                                <img src=\"images/portfolio/folio11.jpg\" class=\"img-responsive\" />\n" +
                "\t                                <div class=\"overlay\">\n" +
                "\t                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"#\"><i class=\"fa fa-link\"></i></a>          \n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                            <div class=\"content\">\n" +
                "\t                                <h2 class=\"post-title\">Post Title</h2>\n" +
                "\t                                <div class=\"author\">\n" +
                "\t                                    <i class=\"fa fa-user\"></i> By <b>Author</b> | <i class=\"fa fa-clock-o\"></i> <time datetime=\"2014-01-20\">April 11th, 2014</time>\n" +
                "\t                                </div>\n" +
                "\t                                <div>\n" +
                "\t                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
                "\t                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
                "\t                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
                "\t                                </div>\n" +
                "\t                                <div class=\"read-more-wrapper\">\n" +
                "\t                                    <a href=\"#\" class=\"btn btn-outlined btn-primary\">Read more</a>\n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "                    </div> \n" +
                "                    <div class=\"gap\"></div>\n" +
                "                    <div class=\"row\">\n" +
                "\t                    <div class=\"col-md-4\">\n" +
                "\t                        <div class=\"post\">\n" +
                "\t                            <div class=\"post-img-content\">\n" +
                "\t                                <img src=\"images/portfolio/folio02.jpg\" class=\"img-responsive\" />\n" +
                "\t                                <div class=\"overlay\">\n" +
                "\t                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"#\"><i class=\"fa fa-link\"></i></a>          \n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                            <div class=\"content\">\n" +
                "\t                                <h2 class=\"post-title\">Post Title</h2>\n" +
                "\t                                <div class=\"author\">\n" +
                "\t                                    <i class=\"fa fa-user\"></i> By <b>Author</b> | <i class=\"fa fa-clock-o\"></i> <time datetime=\"2014-01-20\">April 11th, 2014</time>\n" +
                "\t                                </div>\n" +
                "\t                                <div>\n" +
                "\t                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
                "\t                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
                "\t                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
                "\t                                </div>\n" +
                "\t                                <div class=\"read-more-wrapper\">\n" +
                "\t                                    <a href=\"#\" class=\"btn btn-outlined btn-primary\">Read more</a>\n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                    <div class=\"col-md-4\">\n" +
                "\t                        <div class=\"post\">\n" +
                "\t                            <div class=\"post-img-content\">\n" +
                "\t                                <img src=\"images/portfolio/folio06.jpg\" class=\"img-responsive\" />\n" +
                "\t                                <div class=\"overlay\">\n" +
                "\t                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"#\"><i class=\"fa fa-link\"></i></a>          \n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                            <div class=\"content\">\n" +
                "\t                                <h2 class=\"post-title\">Post Title</h2>\n" +
                "\t                                <div class=\"author\">\n" +
                "\t                                    <i class=\"fa fa-user\"></i> By <b>Author</b> | <i class=\"fa fa-clock-o\"></i> <time datetime=\"2014-01-20\">April 11th, 2014</time>\n" +
                "\t                                </div>\n" +
                "\t                                <div>\n" +
                "\t                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
                "\t                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
                "\t                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
                "\t                                </div>\n" +
                "\t                                <div class=\"read-more-wrapper\">\n" +
                "\t                                    <a href=\"#\" class=\"btn btn-outlined btn-primary\">Read more</a>\n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                    <div class=\"col-md-4\">\n" +
                "\t                        <div class=\"post\">\n" +
                "\t                            <div class=\"post-img-content\">\n" +
                "\t                                <img src=\"images/portfolio/folio11.jpg\" class=\"img-responsive\" />\n" +
                "\t                                <div class=\"overlay\">\n" +
                "\t                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"#\"><i class=\"fa fa-link\"></i></a>          \n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                            <div class=\"content\">\n" +
                "\t                                <h2 class=\"post-title\">Post Title</h2>\n" +
                "\t                                <div class=\"author\">\n" +
                "\t                                    <i class=\"fa fa-user\"></i> By <b>Author</b> | <i class=\"fa fa-clock-o\"></i> <time datetime=\"2014-01-20\">April 11th, 2014</time>\n" +
                "\t                                </div>\n" +
                "\t                                <div>\n" +
                "\t                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
                "\t                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
                "\t                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
                "\t                                </div>\n" +
                "\t                                <div class=\"read-more-wrapper\">\n" +
                "\t                                    <a href=\"#\" class=\"btn btn-outlined btn-primary\">Read more</a>\n" +
                "\t                                </div>\n" +
                "\t                            </div>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "                    </div>                              \n" +
                "                </div>\n" +
                "       \t\t</section>\n" +
                "\n" +
                "\n";
        }
        else return "";
    }

    function getAboutUs() {
        if(name != null)
            return "        <section id=\"about-us\" class=\"white\">\n" +
                "        \t<div class=\"container\">\n" +
                "\t            <div class=\"gap\"></div>\n" +
                "\t            <div class=\"row\">\n" +
                "\t                <div class=\"col-md-12\">\n" +
                "\t                    <div class=\"center gap fade-down section-heading\">\n" +
                "\t                        <h2 class=\"main-title\">A Little About Us</h2>\n" +
                "\t                        <hr>\n" +
                "\t                        <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
                "\t                    </div>                \n" +
                "\t                </div>\n" +
                "\t            </div>\n" +
                "\t            <div class=\"row\">\n" +
                "\t                <div class=\"col-md-10 col-md-offset-1 fade-up\">\n" +
                "\t                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>\n" +
                "\n" +
                "\t                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>\n" +
                "\t                </div>\n" +
                "\t                <div class=\"col-md-4 fade-up\">\n" +
                "\n" +
                "\t                </div>\n" +
                "\t            </div>\n" +
                "               <div class=\"gap\"></div>\n" +
                "                <div class=\"row fade-up\">\n" +
                "                    <div class=\"col-md-6\">\n" +
                "                      \t<div class=\"testimonial-list-item\">\n" +
                "                        <img class=\"pull-left img-responsive quote-author-list\" src=\"images/team/team01.jpg\">\n" +
                "                            <blockquote>\n" +
                "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
                "                                <small>Manager at <cite title=\"Source Title\">Company</cite></small>\n" +
                "                            </blockquote>\n" +
                "                        </div>\n" +
                "                        <div class=\"testimonial-list-item\">\n" +
                "                        <img class=\"pull-left img-responsive quote-author-list\" src=\"images/team/team01.jpg\">\n" +
                "                            <blockquote>\n" +
                "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
                "                                <small>Manager at <cite title=\"Source Title\">Company</cite></small>\n" +
                "                            </blockquote>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-md-6\">\n" +
                "                        <div class=\"testimonial-list-item\">\n" +
                "                        <img class=\"pull-left img-responsive quote-author-list\" src=\"images/team/team01.jpg\">\n" +
                "                            <blockquote>\n" +
                "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
                "                                <small>Manager at <cite title=\"Source Title\">Company</cite></small>\n" +
                "                            </blockquote>\n" +
                "                        </div>\n" +
                "                        <div class=\"testimonial-list-item\">\n" +
                "                        <img class=\"pull-left img-responsive quote-author-list\" src=\"images/team/team01.jpg\">\n" +
                "                            <blockquote>\n" +
                "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
                "                                <small>Manager at <cite title=\"Source Title\">Company</cite></small>\n" +
                "                            </blockquote>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "\n" +
                "\t            <div class=\"gap\"></div>\n" +
                "\t            <div class=\"center gap fade-down section-heading\">\n" +
                "\t                <h2 class=\"main-title\">Meet The Team</h2>\n" +
                "\t                <hr>\n" +
                "\t                <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
                "\t            </div> \n" +
                "\t            <div class=\"gap\"></div>\n" +
                "\n" +
                "\t            <div id=\"meet-the-team\" class=\"row\">\n" +
                "\t                <div class=\"col-md-3 col-xs-6\">\n" +
                "\t                    <div class=\"center team-member\">\n" +
                "                            <div class=\"team-image\">\n" +
                "                                <img class=\"img-responsive img-thumbnail bounce-in\" src=\"images/team/team01.jpg\" alt=\"\">\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/team/team01.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>\n" +
                "                                </div>  \n" +
                "                            </div>\n" +
                "\t                        <div class=\"team-content fade-up\">\n" +
                "\t                            <h5>Daniel Jones<small class=\"role muted\">Web Design</small></h5>\n" +
                "\t                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>\n" +
                "\t                            <a class=\"btn btn-social btn-facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a class=\"btn btn-social btn-google-plus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a> <a class=\"btn btn-social btn-twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a class=\"btn btn-social btn-linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\n" +
                "\t                <div class=\"col-md-3 col-xs-6\">\n" +
                "\t                    <div class=\"center team-member\">\n" +
                "                            <div class=\"team-image\">\n" +
                "                                <img class=\"img-responsive img-thumbnail bounce-in\" src=\"images/team/team02.jpg\" alt=\"\">\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/team/team02.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>\n" +
                "                                </div>  \n" +
                "                            </div>\n" +
                "\t                        <div class=\"team-content fade-up\">\n" +
                "\t                            <h5>John Smith<small class=\"role muted\">Marketing Director</small></h5>\n" +
                "\t                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>\n" +
                "\t                            <a class=\"btn btn-social btn-facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a class=\"btn btn-social btn-google-plus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a> <a class=\"btn btn-social btn-twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a class=\"btn btn-social btn-linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>        \n" +
                "\t                <div class=\"col-md-3 col-xs-6\">\n" +
                "\t                    <div class=\"center team-member\">\n" +
                "                            <div class=\"team-image\">\n" +
                "                                <img class=\"img-responsive img-thumbnail bounce-in\" src=\"images/team/team03.jpg\" alt=\"\">\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/team/team03.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>\n" +
                "                                </div>  \n" +
                "                            </div>\n" +
                "\t                        <div class=\"team-content fade-up\">\n" +
                "\t                            <h5>Dave Gorman<small class=\"role muted\">Web Design</small></h5>\n" +
                "\t                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>\n" +
                "\t                            <a class=\"btn btn-social btn-facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a class=\"btn btn-social btn-google-plus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a> <a class=\"btn btn-social btn-twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a class=\"btn btn-social btn-linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>        \n" +
                "\t                <div class=\"col-md-3 col-xs-6\">\n" +
                "\t                    <div class=\"center team-member\">\n" +
                "                            <div class=\"team-image\">\n" +
                "    \t                        <img class=\"img-responsive img-thumbnail bounce-in\" src=\"images/team/team04.jpg\" alt=\"\">\n" +
                "                                <div class=\"overlay\">\n" +
                "                                    <a class=\"preview btn btn-outlined btn-primary\" href=\"images/team/team04.jpg\" rel=\"prettyPhoto\"><i class=\"fa fa-eye\"></i></a>\n" +
                "                                </div>  \n" +
                "                            </div>  \n" +
                "\t                        <div class=\"team-content fade-up\">\n" +
                "\t                            <h5>Steve Smith<small class=\"role muted\">Sales Assistant</small></h5>\n" +
                "\t                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>\n" +
                "\t                            <a class=\"btn btn-social btn-facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a class=\"btn btn-social btn-google-plus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a> <a class=\"btn btn-social btn-twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a class=\"btn btn-social btn-linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\t            </div><!--/#meet-the-team-->\n" +
                "\t            <div class=\"gap\"></div>  \n" +
                "\t            <div class=\"gap\"></div>   \n" +
                "            </div>      \n" +
                "        </section>\n" +
                "\n";
        else return "";
    }

    function getQuote()
    {
        if(name != null)
            return "\t\t<section id=\"single-quote\" class=\"divider-section\"> \t            \t        \n" +
                "\t            <div class=\"container\">\n" +
                "\t            \t<div class=\"gap\"></div> \n" +
                "\t                <div class=\"row\">                        \n" +
                "\t                    <div class='col-md-offset-2 col-md-8 fade-up'>\n" +
                "\t                        <div class=\"carousel slide\" data-ride=\"carousel\" id=\"quote-carousel\">\n" +
                "\t                            <div class=\"carousel-inner\">\n" +
                "\t                                <div class=\"item active\">\n" +
                "\t                                    <blockquote>\n" +
                "\t                                        <div class=\"row\">\n" +
                "\t                                            <div class=\"col-sm-3 text-center\">\n" +
                "\t                                                <img class=\"img-responsive\" src=\"images/team/team01.jpg\" style=\"width: 100px;height:100px;\">\n" +
                "\t                                            </div>\n" +
                "\t                                            <div class=\"col-sm-9\">\n" +
                "\t                                                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>\n" +
                "\t                                                <small>Someone famous</small>\n" +
                "\t                                            </div>\n" +
                "\t                                        </div>\n" +
                "\t                                    </blockquote>\n" +
                "\t                                </div>\t                                \n" +
                "\t                            </div>                                     \n" +
                "\t                        </div> \n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\t                <div class=\"gap\"></div>\n" +
                "\t      \t\t</div>\n" +
                "  \t\t</section>\n" +
                "\n";
        else return "";
    }

    function getServices()
    {
        if(name != null)
            return "<section id=\"services\" class=\"white\">\n" +
                "            <div class=\"container\">\n" +
                "            <div class=\"gap\"></div> \n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col-md-12\">\n" +
                "                        <div class=\"center gap fade-down section-heading\">\n" +
                "                            <h2 class=\"main-title\">Stuff We Do</h2>\n" +
                "                            <hr>\n" +
                "                            <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
                "                        </div>                \n" +
                "                    </div>\n" +
                "                </div>\n" +
                "\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col-md-4 col-sm-6\">\n" +
                "                        <div class=\"service-block\">\n" +
                "                            <div class=\"pull-left bounce-in\">\n" +
                "                                <i class=\"fa fa-camera fa fa-md\"></i>\n" +
                "                            </div>\n" +
                "                            <div class=\"media-body fade-up\">\n" +
                "                                <h3 class=\"media-heading\">Photography</h3>\n" +
                "                                <p>Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall.</p>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div><!--/.col-md-4-->\n" +
                "                    <div class=\"col-md-4 col-sm-6\">\n" +
                "                        <div class=\"service-block\">\n" +
                "                            <div class=\"pull-left bounce-in\">\n" +
                "                                <i class=\"fa fa-thumbs-o-up fa fa-md\"></i>\n" +
                "                            </div>\n" +
                "                            <div class=\"media-body fade-up\">\n" +
                "                                <h3 class=\"media-heading\">Marketing</h3>\n" +
                "                                <p>Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved.</p>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div><!--/.col-md-4-->\n" +
                "                    <div class=\"col-md-4 col-sm-6\">\n" +
                "                        <div class=\"service-block\">\n" +
                "                            <div class=\"pull-left bounce-in\">\n" +
                "                                <i class=\"fa fa-ticket fa fa-md\"></i>\n" +
                "                            </div>\n" +
                "                            <div class=\"media-body fade-up\">\n" +
                "                                <h3 class=\"media-heading\">Event Management</h3>\n" +
                "                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div><!--/.col-md-4-->\n" +
                "                </div><!--/.row-->\n" +
                "                <div class=\"gap\"></div>\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col-md-4 col-sm-6\">\n" +
                "                        <div class=\"service-block\">\n" +
                "                            <div class=\"pull-left bounce-in\">\n" +
                "                                <i class=\"fa fa-star fa fa-md\"></i>\n" +
                "                            </div>\n" +
                "                            <div class=\"media-body fade-up\">\n" +
                "                                <h3 class=\"media-heading\">Star Gazing</h3>\n" +
                "                                <p>Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its</p>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div><!--/.col-md-4-->\n" +
                "                    <div class=\"col-md-4 col-sm-6\">\n" +
                "                        <div class=\"service-block\">\n" +
                "                            <div class=\"pull-left bounce-in\">\n" +
                "                                <i class=\"fa fa-cogs fa fa-md\"></i>\n" +
                "                            </div>\n" +
                "                            <div class=\"media-body fade-up\">\n" +
                "                                <h3 class=\"media-heading\">Software Support</h3>\n" +
                "                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div><!--/.col-md-4-->\n" +
                "                    <div class=\"col-md-4 col-sm-6\">\n" +
                "                        <div class=\"service-block\">\n" +
                "                            <div class=\"pull-left bounce-in\">\n" +
                "                                <i class=\"fa fa-google-plus fa fa-md\"></i>\n" +
                "                            </div>\n" +
                "                            <div class=\"media-body fade-up\">\n" +
                "                                <h3 class=\"media-heading\">SEO Services</h3>\n" +
                "                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div><!--/.col-md-4-->\n" +
                "                </div><!--/.row-->\n" +
                "            </div>\n" +
                "            <div class=\"gap\"></div>\n" +
                "            <div class=\"container\">\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col-md-12\">\n" +
                "                        <div class=\"center gap fade-down section-heading\">\n" +
                "                            <h2 class=\"main-title\">Our Skills</h2>\n" +
                "                            <hr>\n" +
                "                            <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
                "                        </div>               \n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"container\">     \n" +
                "            <div class=\"row\">            \n" +
                "\t                <div class=\"col-md-3\">\n" +
                "\t                    <div class=\"tile-progress tile-red bounce-in\">\n" +
                "\t                        <div class=\"tile-header\">\n" +
                "\t                            <h3>Video Editing</h3>\n" +
                "\t                            <span>Our cutting room floor is messy.</span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-progressbar\">\n" +
                "\t                            <span data-fill=\"65.5%\" style=\"width: 65.5%;\"></span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-footer\">\n" +
                "\t                            <h4>\n" +
                "\t                                <span class=\"pct-counter counter\">65.5</span>%\n" +
                "\t                            </h4>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\t                <div class=\"col-md-3\">\n" +
                "\t                    <div class=\"tile-progress tile-cyan bounce-in\">\n" +
                "\t                        <div class=\"tile-header\">\n" +
                "\t                            <h3>Marketing</h3>\n" +
                "\t                            <span>How well we can sell you and your brand.</span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-progressbar\">\n" +
                "\t                            <span data-fill=\"98.5%\" style=\"width: 98.5%;\"></span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-footer\">\n" +
                "\t                            <h4>\n" +
                "\t                                <span class=\"pct-counter counter\">98.5</span>%\n" +
                "\t                            </h4>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\t                <div class=\"col-md-3\">\n" +
                "\t                    <div class=\"tile-progress tile-primary bounce-in\">\n" +
                "\t                        <div class=\"tile-header\">\n" +
                "\t                            <h3>Web Development</h3>\n" +
                "\t                            <span>We love servers and stuff.</span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-progressbar\">\n" +
                "\t                            <span data-fill=\"90%\" style=\"width: 90%;\"></span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-footer\">\n" +
                "\t                            <h4>\n" +
                "\t                                <span class=\"pct-counter counter\">90</span>%\n" +
                "\t                            </h4>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\t                <div class=\"col-md-3\">\n" +
                "\t                    <div class=\"tile-progress tile-pink bounce-in\">\n" +
                "\t                        <div class=\"tile-header\">\n" +
                "\t                            <h3>Coffee</h3>\n" +
                "\t                            <span>We done make good joe, though.</span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-progressbar\">\n" +
                "\t                            <span data-fill=\"10%\" style=\"width: 10%;\"></span>\n" +
                "\t                        </div>\n" +
                "\t                        <div class=\"tile-footer\">\n" +
                "\t                            <h4>\n" +
                "\t                                <span class=\"pct-counter counter\">10</span>%\n" +
                "\t                            </h4>\n" +
                "\t                        </div>\n" +
                "\t                    </div>\n" +
                "\t                </div>\n" +
                "\t            </div><!--/.row-->\n" +
                "\t            <div class=\"gap\"></div>\n" +
                "        \t</div>\n" +
                "        </section>\n" +
                "\n" +
                "\n";
        else return "";
    }

    function getPricingSection()
    {
        if(name != null)
            return "            <section id=\"pricing\" class=\"white\">\n" +
                "                <div class=\"container\">\n" +
                "                    <div class=\"center gap fade-down section-heading\">\n" +
                "                        <h2 class=\"main-title\">So, How Much?</h2>\n" +
                "                        <hr>\n" +
                "                        <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>\n" +
                "                    </div>  \n" +
                "                    <div class=\"gap\"></div>\n" +
                "                    <div id=\"pricing-table\" class=\"row\">\n" +
                "                        <div class=\"col-md-3 col-xs-6 flip-in\">\n" +
                "                            <ul class=\"plan plan1\">\n" +
                "                                <li class=\"plan-name\">\n" +
                "                                    <h3>Basic</h3>\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-price\">\n" +
                "                                    <div>\n" +
                "                                        <span class=\"price\"><sup>$</sup>10</span>\n" +
                "                                        <small>month</small>\n" +
                "                                    </div>\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>5GB</strong> Storage\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>1GB</strong> RAM\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>400GB</strong> Bandwidth\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>10</strong> Email Address\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>Forum</strong> Support\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-action\">\n" +
                "                                    <a href=\"#\" class=\"btn btn-outlined btn-primary btn-md btn-white\">Signup</a>\n" +
                "                                </li>\n" +
                "                            </ul>\n" +
                "                        </div><!--/.col-md-3-->\n" +
                "                        <div class=\"col-md-3 col-xs-6 flip-in\">\n" +
                "                            <ul class=\"plan plan2 featured\">\n" +
                "                                <li class=\"plan-name\">\n" +
                "                                    <h3>Standard</h3>\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-price\">\n" +
                "                                    <div>\n" +
                "                                        <span class=\"price\"><sup>$</sup>20</span>\n" +
                "                                        <small>month</small>\n" +
                "                                    </div>\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>5GB</strong> Storage\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>1GB</strong> RAM\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>400GB</strong> Bandwidth\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>10</strong> Email Address\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>Forum</strong> Support\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-action\">\n" +
                "                                    <a href=\"#\" class=\"btn btn-outlined btn-primary btn-md\">Signup</a>\n" +
                "                                </li>\n" +
                "                            </ul>\n" +
                "                        </div><!--/.col-md-3-->\n" +
                "                        <div class=\"col-md-3 col-xs-6 flip-in\">\n" +
                "                            <ul class=\"plan plan3\">\n" +
                "                                <li class=\"plan-name\">\n" +
                "                                    <h3>Advanced</h3>\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-price\">\n" +
                "                                    <div>\n" +
                "                                        <span class=\"price\"><sup>$</sup>40</span>\n" +
                "                                        <small>month</small>\n" +
                "                                    </div>\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>50GB</strong> Storage\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>8GB</strong> RAM\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>1024GB</strong> Bandwidth\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>Unlimited</strong> Email Address\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>Forum</strong> Support\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-action\">\n" +
                "                                    <a href=\"#\" class=\"btn btn-outlined btn-primary btn-md btn-white\">Signup</a>\n" +
                "                                </li>\n" +
                "                            </ul>\n" +
                "                        </div><!--/.col-md-3-->\n" +
                "                        <div class=\"col-md-3 col-xs-6 flip-in\">\n" +
                "                            <ul class=\"plan plan4\">\n" +
                "                                <li class=\"plan-name\">\n" +
                "                                    <h3>Mighty</h3>\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-price\">\n" +
                "                                    <div>\n" +
                "                                        <span class=\"price\"><sup>$</sup>100</span>\n" +
                "                                        <small>month</small>\n" +
                "                                    </div>\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>50GB</strong> Storage\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>8GB</strong> RAM\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>1024GB</strong> Bandwidth\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>Unlimited</strong> Email Address\n" +
                "                                </li>\n" +
                "                                <li>\n" +
                "                                    <strong>Forum</strong> Support\n" +
                "                                </li>\n" +
                "                                <li class=\"plan-action\">\n" +
                "                                    <a href=\"#\" class=\"btn btn-outlined btn-primary btn-md btn-white\">Signup</a>\n" +
                "                                </li>\n" +
                "                            </ul>\n" +
                "                        </div><!--/.col-md-3-->\n" +
                "                    </div>\n" +
                "                    <div class=\"gap\"></div> \n" +
                "                </div>\n" +
                "            </section>\n";
        else return "";
    }
