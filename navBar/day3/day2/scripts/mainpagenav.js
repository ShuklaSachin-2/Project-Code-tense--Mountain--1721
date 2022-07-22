function navbar() {
    return `<div id="navBar">
    <div id="first_div">
        <div id="nav_left_div">
            <a href="navbar.html"><img
                    src="https://www.ponoko.com/blog/wp-content/uploads/2017/09/indiegogo-logo.png" id="logo"></a>
            <p id="nav_exp" class="classHover" onclick="details()">Explore</p>

            <p id="nav_wwd"><a href="navbar.html" class="classHover">What We Do</a></p>

            <img src="search.png" alt="" id="search" class="classHover">
        </div>
        <div id="nav_right_div">
            <p id="nav_forEnp"> <a href="./forEntrepreneurs/navbar.html" id="link_for_enp" class="classHover">For
                    Entrepreneurs</a></p>
            <p id="nav_camp"> <a href="navbar.html" class="classHover">Start a Campaign</a></p>
            <img src="line.png" alt="" srcset="" id="line_img">
            <p id="nav_login"><a href="login.html" class="classHover">Log In</a></p>
            <p id="nav_signup"><a href="signup.html" class="classHover">Sign Up</a></p>
        </div>
    </div>
    <hr>
    <div id="second_div">
        <div id="exp_all_project">
            <div id="ins_exp_all_project">
                <div id="exp1">
                    <p>Explore All Projects</p>
                    <img src="img1.png" alt="" id="img1">
                </div>
                <div id="exp">
                    <p>Our Top 10 Finds</p>
                    <img src="img2.png" alt="">
                </div>
                <div id="exp">
                    <p>Team Favorites</p>
                    <img src="img3.png" alt="">
                </div>
                <div id="exp">
                    <p>Spend Under $100</p>
                    <img src="img4.png" alt="">
                </div>
                <div id="exp">
                    <p>Join the Convo</p>
                    <img src="img5.png" alt="">
                </div>
            </div>
        </div>
        <div id="category">
            <div id="tech_inno">
                <a href="tech.html">
                    <p>TECH & INNOVATION</p>
                </a>
                <div id="inside_cat">
                    <div id="col1">
                        <!-- col1 -->
                        <a href="Audio">Audio</a> <br>
                        <a href="Camera">Camera Gear</a><br>
                        <a href="education">Education</a><br>
                        <a href="energy">Energy & Green Tech</a><br>
                        <a href="fashion">Fashion & Wearables</a><br>
                        <a href="food">Food & Beverages</a><br>
                    </div>
                    <div id="col2">
                        <!-- col2 -->
                        <a href="Audio">Health & Fitness</a> <br>
                        <a href="Camera">Home</a><br>
                        <a href="education">Phones & Accessories</a><br>
                        <a href="energy">Productivity</a><br>
                        <a href="fashion">Transportation</a><br>
                        <a href="food">Travel & Outdoors</a><br>
                    </div>
                </div>
            </div>
            <img src="line1.png" alt="" id="line1">
            <div id="tech_inno">
                <a href="tech.html">
                    <p>CREATIVE WORKS</p>
                </a>
                <div id="inside_cat">
                    <div id="col1">
                        <!-- col1 -->
                        <a href="Audio">Art</a> <br>
                        <a href="Camera">Comics</a><br>
                        <a href="education">Dance & Theater</a><br>
                        <a href="energy">Film</a><br>
                        <a href="fashion">Music</a><br>
                        <a href="food">Photography</a><br>
                    </div>
                    <div id="col2">
                        <!-- col2 -->
                        <a href="Audio">Podcast,Blogs & Vlogs</a> <br>
                        <a href="Camera">Tabletop Games</a><br>
                        <a href="education">Vide Games</a><br>
                        <a href="energy">Web Series & TV Shows</a><br>
                        <a href="fashion">Writing & Publishing</a><br>
                    </div>
                </div>
            </div>
            <img src="line1.png" alt="" id="line1">

            <div id="tech_inno">
                <a href="tech.html">
                    <p>COMMUNITY PROJECTS</p>
                </a>
                <div id="inside_cat">
                    <div id="col1">
                        <!-- col1 -->
                        <a href="Audio">Culture</a> <br>
                        <a href="Camera">Environment</a><br>
                        <a href="education">Human Rights</a><br>
                        <a href="energy">Local Business</a><br>
                        <a href="fashion">Wellness</a><br>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`
}

function navbar2() {
    return ` <div id="nav_left_div">
    <a href="navbar.html" id="logo"><img src="logo2.png"></a>
    <p id="nav_exp" class="classHover" onclick="display1()">How it Works
    <div id="dropdown1">
        <p><a href="https://entrepreneur.indiegogo.com/how-it-works/campaign/">Campaign</a></p>
        <p><a href="https://entrepreneur.indiegogo.com/how-it-works/indemand/">In Demand</a></p>
        <p><a href="https://entrepreneur.indiegogo.com/how-it-works/indiegogo-china-fast-track-global-market/">China Program</a></p>
        <p><a href="https://learn.indiegogo.com/pricing-and-fees/">Fees</a></p>
        <p><a href="https://entrepreneur.indiegogo.com/community/"> Community</a></p>
    </div>
    </p>
    <p id="nav_wwd" class="classHover" onclick="display2()">Resources</p>
    <div id="dropdown2">
        <p><a href="https://entrepreneur.indiegogo.com/education">Education Center</a></p>
        <p><a href="https://entrepreneur.indiegogo.com/education/plus/">Education Plus</a></p>
        <p><a href="https://entrepreneur.indiegogo.com/directory">Experts Directory</a></p>
        <p><a href="https://support.indiegogo.com/hc/en-us">Help & Support</a></p>
        <p><a href="https://learn.indiegogo.com/trust/">Trust & Saftey</a></p>
    </div>
    <p id="nav_wwd" class="classHover" onclick="display3()">About Us</p>
    <div id="dropdown3">
        <p><a href="https://grow.indiegogo.com/indiegogo-vs-kickstarter/">Indiegogo vs. Kickstarter</a></p>
        <p><a href="https://www.indiegogo.com/contact/press">Press</a></p>
        <p><a href="https://www.indiegogo.com/contact/press">About Us</a></p>
    </div>
</div>
<div id="nav_right_div">
    <button id="nav_camp">
        <a id="camp_link" href="https://www.indiegogo.com/start-a-campaign?utm_source=etr&utm_medium=referral&utm_campaign=ent-hiw&utm_content=cta#/">START A CAMPAIGN</a>
    </button>
    <p id="nav_signup" class="classHover"><a href="signup.html">Sign Up</a></p>
    <p id="nav_login" class="classHover"><a href="login.html">Log In</a></p>
</div>`
}

export { navbar, navbar2 };