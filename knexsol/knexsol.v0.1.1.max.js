$(function() {
    /*************************************************************
    * Initiate Variables 
    *************************************************************/
    var kn = window.kn = window.kn || {};
    var abcd = 'abcdefghijklmnopqrstuvwxyz';
    var k1 = ["JgGhQHnxzroZ7N(X2g2qeyB5y1RxTF","KlJoAO#6i-)pCRi9WwcNWJhMoQLqMX","4Oy7Zk^aV5fl79YO8U8BpBpo)VD=Fi","*3r3-uEy!kjE1Lu7=VHOVj8dinwBLB","K@M$JLYEsbHL2qtqT1Ebe(pm#1KQ9!","A!E_b96K=saW#HEY$LBxlmjkNOm=(u","Q^d5FDFh1XCsxA3ZbNwB7W9KOVBjBq","fD5GO@$ImBtgL*yK$aiE-^pi!@D$MJ","E#eH_gOSitml-2!o1tu5QijMdlpb0t","RYhLvNLA3q7yBSyt-@V6jFsz-n*AxB","aAeucVQFwE6fNB8NY0cZ2_tqlDbZQ!","MHvshBH8HMm)0g@A1r60HV9aDvjs0e","Ag3c(B3(dLVe7L6BJUR-4KKQb6fO6M","TXysNS4a$t@NdS4#ZLjg(=iuG6Z2kC","zWLIUxKF@djni7QUJJu9n@oSk=(0Tc","ftKL8GFlploV4yv0S46x1fVgjI7cOE","CGk6y_r(39geopmOX770a9Jqec5Ayg","I3c53N^wxmzpes_e$g*SGbRQj8EHNo","wDaZ7H!FXs=jMK-3$It7Cc1Rkyzisb","DLLeMOMFzY(uaeSXH)1$(Rq^-#sB*z","mY=Yu6$r=-2YQqLHJJYwrO8kieidUN","EWhlMccuGpT6hMR=N(YT*QtoYmrVXw","X$_Dz_)ax8lys9_2Su43Mzg!7tEqgu","l6J^lzO3O1U_q^^e18SAu@Lb!edzBF","cu_Dp=DmwvKj4*zb$RMVwKFCCYSkV*","ol818T*z*32krIM(MwbFHj0Ri7T=sn","B_oMqNq_hccI3cu7nbj3h5Di)vgrub","Ve89zvn1m#gZw!)wAhAddguC5tMqrV","h^xsv)BrOvo$u0kumi7ZxD)nGK6gJF","8$A*oElA3yuzu1@u$(a1EqsAqmfVO8","3x10qMUdD2ZrWQCimbTFextsUQ@iR5","m4uF#_d#7uusbssZNa(s7YgfJtLf^e","W5NCAQ^Nk0UhzK$FuA*5HV5zpn*(-p","1zoA-N!l@=ayzOe^(OKLSLfJZ^70jW","e7x6S5hd7TsuMgKrv!Vo$1W1*rn9RC","IF!-FDlAq-y7E!Ro7nyGfKh-kixJcY","=y#l*pE3pq6TE3*E(qfGzgMIwN1@xG","fi7Uv7cTU^ED8t_sZgJ===CjKpujEA","d4*uZ)pzAJ!1(FeFB=0m7RSpGwx9Ni","HxDkt_q7Du3(JEy45OZ$qHs7KVd!tx","CrjbL7GE@4emKvvhlTD7TbhnzLqH2@","RzL5-8Y-2Vw0_s2r1(m$=hv1oe7UbY","eJE8Dv_1!ve!*9*BzmtnKZ#97t4AVU","nARB7-(6Elt#oRyD**DjmrG2y_#Df(","OHlX80hMcSTkzZ#AlOkgOJsz^23p9w","ULrFm61lbhymaFQ9$CNCO1-ST07LVa","WLKXS^1n2d)b79ZAT3y5Hi0s-8dEQf","UD084QhJxf8Ke^T0#!KvD3FryHW=Il","-)h1oA0$Iit2@MSWiUG5*V10^BtBLY","1Ai@gFaJoDrEoJd@*8@uQk!eeL1m*V","f3Hucy!(9(RErTM1XXiSCmqExn(VV*","lweVA9u@8OhULwf7(GR_6SbkE16nK5","nJN1lvJjMB4aW!JEwIapuwFddY8yva","mWN)jA35(6i7SI2yxGg5HT!=MlO*XV","nA=)MtYo3IUq!3^pLe=F$!rjfv(pV2","1Srg(o#qhxgO)511wu@W8)v4)pXC!9","_Q1FEbK5Ymm7HkCfb_q*1Sx1^E$J^T","@S6JTn40O^8Cm5^A8@dgHe!2-7AXff","i2GTiXGju@nbue(qsoNFcL(()1h-r*","1VSQ8ejwDJD!sd^lf@0xWwFNHxd1eJ","I7fh8p_4t0X^8Gg71FqZb(3ADStgT5","Y*sswQ6#!wJ^8C9qWE4R(VW8S9-=bQ","hY2Z1^$Z4Mfor^4DM9auSOB)#-UDgX","5ejp0MWDwkK51N=BLrsY2@joEfik$H","$C)Mu0z35JG8V3RbQwBqaSUnYFF54e","kjG=Errm$fsA6NW^h2$C7Fv1HBBLN0","1eXVYu^jH^5@dBI)3BI6u5Jhjsxhe4","v(fO#c@Ia4AC3*racCcv6NCR0Wmv1@","qSdzZtwX9VF71Fz5Uo@Y24Ijgc@LGb","5MuId3Xt^ROfVva0iGOCcf)32^zC2G","#b!)WrfAFDj=oKasLl25=kH#GY$m)w","FstShLx7QvoKyK7a7bv6kX1bFgcFXn","NcD=Ud!(X-*ZjIN@kgzUWw!j0jyDk7","d)!rxD#O@lVT8_v!*)uu*Q_@Mj8Thi","5ln!LEBHD^0)UQvF7oZJzXKnp!v04s","R!^ROtCkrzV9_7^tjj4jQ-HS1W7$4w","CZW@1He-Dqh8YwUkNz3gySoYE-W8mC","kM!bjGjy^!i#JY7YEQWA0Dwc$9Bv6m","hY-)Am=63cmb#o*lU3ng@bK(^IYUdR","DhT8ge@WalSbpIY=R$ZWvCc5TmdLta","6lwXNGI9nUU9!24Jss89LB^E(Ztg9)","19kb@7#Dny^j!SUCRNx@8Hd82!_E8u","h3S9((z1Fakk@E0^NCT$Wrh2Ws0ipl","Lz7Mv-nayV=nYcy1n_(^I$6Oaw*p5v","GRWXLpu#!RXpB3YAuQ=bpOt0wTgxkV","(lAiX6qls1$Ua#QIAS)7f#@d8XUO44","noGSKy5-jG5jT0!#KZ1AIZwQ95ihnq","$e==-^w9o0QoVQrYVR6(GCOKk)YB$M","ZFbeel*-SZ#FYRXl*3pj$5i6AT0gnd","y6e8tr^!h-bRDrX(dhUv-QR#Dxr=R_","FcQnZavrXYubx8E#XENYA=hBB(iTnp","z8f-y2$XadWlC*gL*8bpz22@HfMtxG","^Y5OUaW6Qxz3LD3Xbaw856riDVog=g","y*okAdc(7l#Vz^62WmG*z$2gUELUDV","gMD5ot3glSn4(RwFL(g5LFdcdW5O-Q","AhvJEyFf4(M!TU1hM-nybMW-OeMgN_","XLxNV8$U!uWBh7Rzdjebz2CNvKucMr","m!26LzJCVpSNo)QlABdSv0DyDTkF**","c66u@AVSMp)KD$yfXL#=-gZ!ztOZA8","d1Yd=U9u5aABnl)!eAzQajAKtGUq8o"];
    
    ///////// END OF Initiate Variable ///////////////////////////


    /************************************************************
    * Initiation
    ************************************************************/
    // add data-body-page-id value to body as ID
    $('body').attr('id', ($('[data-body-page-id]').attr('data-body-page-id') || 'none').trim());
    
    
    //header colapse on scroll
    $(document).on('scroll', function(){
        if ($(document).scrollTop() >= 100) { $('body').addClass('header-collapse'); }
        else { $('body').removeClass('header-collapse'); }
    });

    //if Quick Exam Page, prepare it
    if($('#qe-exam-partial').length > 0) {
        prepareQuickExamPage();
    }
    ///////////////// END OF Initiation ///////////////////////
 
    /***********************************************************************
    * init all bx-accordions
    ***********************************************************************/
    $('.bx-accordion').each(function() {
        var maxHt = 0;
        var imgList = $(this).find('.acc-img');
        //Find the max height from all the images
        imgList.each(function() {
            if ($(this).height() > maxHt) {
                maxHt = $(this).height();
            }
        });

        //Assign that height to each one of them
        imgList.each(function() {
            $(this).height(maxHt);
        });

        //also correct the top position of the arrow icons
        var navTop = maxHt / 2 - 20;
        navTop = (navTop < 110) ? 110 : navTop;
        $(this).find('.navigate').css('top', navTop + 'px')


        //since the navigate icons are by default hidden by css
        //unhide the right one
        $(this).find('.navigate.right').show();


        //if on home page why-choose-us accordion, then do special height adjustments
        if($(this).hasClass('why-choose-us')) {
            if(maxHt > 240) {
                $('#home-page .flatten-ul').css('max-height', (maxHt-60) + 'px');
            }
        }
    });

    //accordion navigattion arrows clicked
    $(document).on('click', '.bx-accordion .navigate', function() {
        var unitList = $(this).closest('.bx-accordion').find('.acc-unit');

        var selectedIndex;
        var animateClass = 'visible animated bounceIn';

        unitList.each(function(index) {
            if (!selectedIndex && $(this).hasClass('visible')) {
                selectedIndex = index;
            }
        });

        // if left button clicked 
        // and selectedIndex is Greater than  0
        // minus 1 it
        if ($(this).hasClass('left') && selectedIndex > 0) {
            selectedIndex--;
            //animateClass = 'visible animated zoomIn';
        }

        // if right button clicked 
        // and selectedIndex is less than  (length-1)
        // plus 1 it
        else if ($(this).hasClass('right') && selectedIndex < (unitList.length - 1)) {
            selectedIndex++;
            //animateClass = 'visible animated zoomIn';
        }

        // Add visible to only the particular class
        unitList.removeClass(animateClass);
        unitList.eq(selectedIndex).addClass(animateClass);

        //hide the terminal arrows
        var bxAccordion = $(this).closest('.bx-accordion');
        bxAccordion.find('.navigate').show(); //1st show both
        if (selectedIndex === 0) {
            bxAccordion.find('.navigate.left').hide();
        } else if (selectedIndex === (unitList.length - 1)) {
            bxAccordion.find('.navigate.right').hide();
        }
    });
    //////////////// END OF bx-accordion ///////////////////////////////////


    /**********************************************************************
    * Resolve all bx-repeats
    **********************************************************************/
    $('[bx-repeat]').each(function(){
        var el = $(this);
        var objArr = eval(el.attr('bx-repeat'));
        //console.log('eval output...');
        //console.log(objArr);

        var newEl, bindVar, childEl, tempContainer = $('<div/>');
        //now create element for every object in that array
        objArr.map(function(obj){
            newEl = el.clone();

            //resolve all bx-bind
            newEl.find('[bx-bind]').each(function(){
                childEl = $(this);
                bindVar = childEl.attr('bx-bind');
                childEl.html(obj[bindVar]);
            });

            //resolve all bx-class
            newEl.find('[bx-class]').each(function(){
                childEl = $(this);
                bindVar = childEl.attr('bx-class');
                childEl.addClass(obj[bindVar]);
            });

            //resolve all bx-href
            newEl.find('[bx-href]').each(function(){
                childEl = $(this);
                bindVar = childEl.attr('bx-href');
                if (obj[bindVar]) {
                    childEl.attr('href', obj[bindVar]);
                }
            });

            //newEl.after(el);
            tempContainer.append(newEl);
        });

        el.after(tempContainer.html());
        el.remove();
    });
    /////////////////// END OF bx-repeat //////////////////////////////////


    /**********************************************************************
    * List of Exam Page Codes
    **********************************************************************/
    // User selects a quick exam
    $(document).on('click', '#list-of-exams .qe-card', function () {

        //if this a custom exam, show the customization popup
        if($(this).hasClass('custom-qe-exam-card')) {

        }
        //else proceed with the normal scenario
        else {
            var name = $(this).find('.title').text() + " Test on " + kn.examListData.name;
            var noOfQuestion = $(this).find('.no-of-qstn').text();
            var time = $(this).find('.time').text();
            goToQuickExamPage(name, noOfQuestion, time);
        }
    });

    // this function will navigate to Quick Exams page
    // it will pass the parameters for quick exam, i.e. 
    // questions and time
    function goToQuickExamPage (name, noOfQuestion, time) {
        var urlParams = {
            "name": name,
            "question": noOfQuestion,
            "time": time
        };

        goToUrl(createUrlWithParamsObj(kn.examListData.qeUrl, urlParams));
    }
    //////////////// END OF List of Exam Page Codes ///////////////////////
    

    /*********************************************************************
    * REUSABLE FUNCTIONS
    *********************************************************************/
    // Go to the given url
    function goToUrl (url) {
        window.location.href = url;
    }

    // pass the main url and params object
    // to get the complete url
    function createUrlWithParamsObj (url, obj) {
        var urlString = '';
        for (var i in obj) {
            urlString += i + '=' + obj[i] + '&';
        }
        urlString = urlString.substr(0, urlString.length-1);
        return url + '?knex=' + encodeURIComponent(btoa(urlString));
    }

    // decode url params from String to Object
    // if no param passed, it will try to read 
    // query parameter 'knex' from url
    function getDecodedUrlParamObj (urlParamsString) {
        if(!urlParamsString) {
            var urlParamsString = window.location.href.toString();
            if(urlParamsString.indexOf('?') < 0) {
                return;
            }
            urlParamsString = urlParamsString.substr(urlParamsString.indexOf('?')+1);
            urlParamsString = paramStringToObj(urlParamsString)['knex'];
        }

        return paramStringToObj(atob(decodeURIComponent(urlParamsString)));        
    }

    function paramStringToObj (urlParamsString) {
        var urlObj = {};
        var paramPairs = urlParamsString.split('&');
        var temp;
        for (var i in paramPairs) {
            temp = paramPairs[i].split('=');
            urlObj[temp[0]] = temp[1];
        }
        return urlObj;
    }

    //Draw PI Chart with Result
    function drawPi (result) {
        var w = $('#chart-container').width();                        //width
        var h = w;                           //height
        var r = w/2;                            //radius
        var color = d3.scale.category20();     //builtin range of colors

        data = [
            {"label":"correct", "value": (result.correct/result.totalQ)*100 },
            {"label":"skipped", "value": (result.skipped/result.totalQ)*100 },
            {"label":"incorrect", "value": (result.incorrect/result.totalQ)*100 }
            ];
        
        var vis = d3.select("#chart-container")
            .append("svg:svg")              //create the SVG element inside the <body>
            .data([data])                   //associate our data with the document
                .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
                .attr("height", h)
            .append("svg:g")                //make a group to hold our pie chart
                .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

        var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
            .outerRadius(r);

        var pie = d3.layout.pie()           //this will create arc data for us given a list of values
            .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

        var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
            .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
            .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
                .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                    .attr("class", "slice");    //allow us to style things in the slices (like text)

            arcs.append("svg:path")
                    .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
                    .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

            arcs.append("svg:text")                                     //add a label to each slice
                    .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                    //we have to make sure to set these before calling arc.centroid
                    d.innerRadius = 0;
                    d.outerRadius = r;
                    return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
                })
                .attr("text-anchor", "middle")                          //center the text on it's origin
                .text(function(d, i) { 
                    //add label only if slice exists
                    if(data[i].value > 0) {
                        return data[i].label;
                    }                         
                });        //get the label from our original data array
    }

    // Sec to hh:mm:ss
    function formatHMS (duration) {
        var h = Math.floor(duration / 3600);
        var rem = duration % 3600;
        var m = Math.floor(rem / 60);
        var s = rem % 60;

        h = h.toString().length > 1 ? h : ('0' + h);
        m = m.toString().length > 1 ? m : ('0' + m);
        s = s.toString().length > 1 ? s : ('0' + s);

        return (h + ':' + m + ':' + s);
    }

    // hh:mm:ss to sec
    function HMSToSec (hms) {
        var sec = 0;
        var temp = hms.toString().split(':').reverse();

        // Hour Exists ?
        // if yes, add it
        if(temp.length > 2) {
            sec += parseInt(temp[2]) * 3600;
        }
        // Min Exists ?
        // if yes, add it
        if(temp.length > 1) {
            sec += parseInt(temp[1]) * 60;
        }
        // finally add the sec
        sec += parseInt(temp[0]);

        return sec;
    }

    // decode that was previously encoded
    function decode (s) {
        var first30 = s.substr(0 , 30);
        var encAns = s.substr(30);
        var k = k1[k1.indexOf(first30) + 50];
        return CryptoJS.AES.decrypt(encAns, k).toString(CryptoJS.enc.Utf8);
    }

    //Take an array and randomize it
    function randomizeArr(arr) {
        var r = [];
        var index;
        while (arr.length > 0) {
            index = Math.floor(Math.random() * arr.length);
            r.push(arr[index]);
            arr.splice(index, 1);
        }

        return r;
    }
    ///////////////// END OF REUSABLE FUNCTIONS //////////////////////////


    /*********************************************************************
    * QUICK EXAM PAGE CODE STARTS HERE
    *********************************************************************/
    function prepareQuickExamPage () {
        var qeUrlData = getDecodedUrlParamObj();
        if (!qeUrlData || !qeUrlData.name || !qeUrlData.question || !qeUrlData.time) {
            alert('Data Inadequate... ' + JSON.stringify(qeUrlData));
            //window.history.back();
        }
        else {
            // get desired no of question
            // get rid off the rest
            qeUrlData.question = parseInt(qeUrlData.question);
            kn.qList.list = randomizeArr(kn.qList.list).slice(0, qeUrlData.question);
            kn.examData = {
                "totalTime": HMSToSec(qeUrlData.time)
            };

            initiateExamPage();
        }
    }
    //////////////// END OF QUICK EXAM PAGE CODE /////////////////////////


    /*********************************************************************
    * EXAM SECTION
    *********************************************************************/
    function initiateExamPage () {
        var noOfQstn, 
            duration, 
            timeRunning = false,
            timePrev = 0,
            result = {
                skipped: 0,
                correct: 0,
                incorrect: 0
            };
        var qpaperContainer = $('<div></div>');

        $('body').on('click', '#start-exam', startExam);
        $('body').on('click', '#submit-exam', submitExam);
        $('#btn-go-back-to-exam-cover').click(function(){
            window.location.reload();
        });
        initExamEngine();

        function initExamEngine () {
            initVars();
            createQPaper();            
        }

        function initVars () {
            noOfQstn = kn.qList.list.length;
            duration = kn.examData.totalTime;

            $('.exam-duration').text(formatHMS(duration));
            $('.no-of-qstns').text(formatHMS(noOfQstn));
        }

        function createQPaper () {
            kn.qList.list = randomizeArr(kn.qList.list);

            //Now Prepare html for each question
            kn.qList.list.forEach(function (r, index) {

                // If it is a fill-in-the-blanks type
                if (r.qtype === "fitb") {
                    createFITBQuestion (r, index);                    
                }

                //Else if Multi MCQ
                else if (r.qtype === "mmcq") {
                    createMMCQQuestion (r, index);
                }

                // Else if Single MCQ
                else if (r.qtype === "smcq") {
                    createSMCQQuestion (r, index);
                }

                //
                // If Nothing Matches
                // Check the groupQType
                //
                else if (kn.qList.groupQType === "fitb") {
                    createFITBQuestion (r, index);
                }
                else if (kn.qList.groupQType === "mmcq") {
                    createMMCQQuestion (r, index);
                }
                else if (kn.qList.groupQType === "smcq") {
                    createSMCQQuestion (r, index);
                }
            });


            $('#q-wrapper').append(qpaperContainer);
        }

        /*
        * Create Single MCQ type Question
        * And add back to DOM
        */
        function createSMCQQuestion (r, index) {
            //Copy the template
            var template = $('#smcq-template').clone();

            //change id
            template.attr('id', 'htmlqid-' + (index+1));
            template.attr('data-qtype', 'smcq');

            //Add question
            //template.find('.question').html("<b>Q" + (index+1) + ".</b> " + r.q);
            template.find('.question').html('<b>Q' + (index+1) + '. </b>' + r.q);
            template.find('.explanation-text .text').html(r.exp);
            template.find('.key').text(r.key);

            // Now for each option
            // Clone the options template 
            // and dont forget to remove it
            r.ops.forEach(function(ans, i){
                var opTemplate = template.find('.option-template').clone();
                opTemplate.removeClass('option-template');
                opTemplate.append(abcd[i].toUpperCase() + '. ' + ans);
                opTemplate.find('input[type="radio"]').attr({
                    "name": "radiohtmlqid-" + (index+1),
                    "value": abcd[i]
                });
                template.find('.options-container').append(opTemplate);
            });

            // In case of Single MCQ,
            // The options container should always have a default
            // value of "I Dont Want to Answer"
            var opTemplate = template.find('.option-template').clone();
            opTemplate.removeClass('option-template');
            opTemplate.append("Z. I don't want to answer.");
            opTemplate.find('input[type="radio"]').attr({
                "name": "radiohtmlqid-" + (index+1),
                "value": "z",
                "checked": true
            });
            template.find('.options-container').append(opTemplate);

            //Now remove the options template 
            template.find('.option-template').remove();

            //Add it to DOM Variable
            qpaperContainer.append(template);
        }

        /*
        * Create Multiple MCQ type Question
        * And add back to DOM
        */
        function createMMCQQuestion (r, index) {
            //Copy the template
            var template = $('#mmcq-template').clone();

            //change id
            template.attr('id', 'htmlqid-' + (index+1));
            template.attr('data-qtype', 'mmcq');

            //Add question
            template.find('.question').html('<b>Q' + (index+1) + '. </b>' + r.q);
            template.find('.explanation-text .text').html(r.exp);
            template.find('.key').text(r.key);

            // Now for each option
            // Clone the options template 
            // and dont forget to remove it
            r.ops.forEach(function(ans, i){
                var opTemplate = template.find('.option-template').clone();
                opTemplate.removeClass('option-template');
                opTemplate.append(abcd[i].toUpperCase() + '. ' + ans);
                opTemplate.find('input[type="checkbox"]').attr({
                    "value": abcd[i]
                });
                template.find('.options-container').append(opTemplate);
            });

            //Now remove the options template 
            template.find('.option-template').remove();

            //Add it to DOM Variable
            qpaperContainer.append(template);
        }

        /*
        * Create Fill-In-The-Blank type Question
        * And add back to DOM
        */
        function createFITBQuestion (r, index) {
            //replace ____ with real input field
            var questionHtml = r.q.replace(/____/g, '<input type="text" class="form-control fitb-input" placeholder="type answer ..."/>');

            //Copy the template
            var template = $('#fitb-template').clone();

            //change id
            template.attr('id', 'htmlqid-' + (index+1));
            template.attr('data-qtype', 'fitb');

            //Add question
            template.find('.question').html('<b>Q' + (index+1) + '. </b>' + questionHtml);
            template.find('.explanation-text .text').html(r.exp);
            template.find('.key').text(r.key);

            //Add it to DOM Variable
            qpaperContainer.append(template);
        }

        function startExam () {
            //show only page-exampaper
            $('.page, .knexsol-header, .post-share-buttons, .comments, #comments').hide();

            $('.page-exampaper').show();

            $('#countdown-clock').text(formatHMS(duration));
            timePrev = (new Date()).getTime();
            timeRunning = true;
            countDown();
        }

        function countDown () {
            if(!timeRunning) {
                return;
            }

            var now = (new Date()).getTime();
            //1 sec passed???
            if ( (now - timePrev) >= 1000 && duration > 0) {
                duration--;
                $('#countdown-clock').text(formatHMS(duration));
                timePrev = now;
            }
            //if time up
            else if (duration <= 0) {                
                submitExam();
            }

            setTimeout(countDown, 500);
        }

        function submitExam () {
            timeRunning = false;
            //prevent further edit of answers
            $('#timeup-mask').show();
            $('#submit-exam').hide();

            // Loop thru each question
            // and check for correctness
            $('#q-wrapper .qa-panel').each(function() {
                //Get QTYPE
                var qtype = $(this).attr('data-qtype');
                var resp;

                // If Single MCQ
                if (qtype === 'smcq') {
                    resp = checkSMCQAns(this);
                }
                //If Multi MCQ
                else if (qtype === 'mmcq') {
                    resp = checkMMCQAns(this);
                }
                //if fitb
                else if (qtype === 'fitb') {
                    resp = checkFITBAns(this);
                }

                if(resp === 0) {
                    result.skipped++;

                    //hide this one from result
                    $(this).hide();
                }
                else if (resp > 0) {
                    result.correct++;
                }
                else {
                    result.incorrect++;

                    //if there is an Explanation, show it
                    if($(this).find('.explanation-text .text').html().trim().length > 0) {
                        $(this).find('.explanation-text').show();
                    }
                }
            });

            //update the result-modal
            result.totalQ = noOfQstn;
            result.percentage = result.correct * 100 / noOfQstn;
            $('#total-questions').text(noOfQstn);
            $('#correct-ans').text(result.correct);
            $('#incorrect-ans').text(result.incorrect);
            $('#skipped-ans').text(result.skipped);
            $('#marks-obtained').text(result.percentage.toFixed(2) + '%');
            $('#result-section, #label-whatwentwrong').show();
            //$('.exam-top-panel .home-icon').show();

            drawPi(result);

            $('.comments, #comments').show();
            
            $(window, document).scrollTop(0);
        }

        function checkSMCQAns(el) {
            var chosenAns = $(el).find('input[type="radio"]:checked').attr('value').trim().toLowerCase();

            //if chosen value 'z', then skipped
            if(chosenAns === 'z') {
                return 0;
            }

            var correctAns = decode($(el).find('.key').text()).trim().toLowerCase();

            //mark the correct one with green
            $(el).find('input[type="radio"]').eq(abcd.indexOf(correctAns)).closest('.option-radio-container').addClass('correct-green');

            //the value is only A / B / C / D etc
            // chosenAns same as coorectAns
            if (chosenAns === correctAns) {
                //Correct
                return 1;
            }
            //else incorrect
            else {
                //mark the incorrect one with red
                $(el).find('input[type="radio"]').eq(abcd.indexOf(chosenAns)).closest('.option-radio-container').addClass('incorrect-red');

                return -1;
            }
        }

        function checkMMCQAns(el) {

            var chosenAnsArr = [];
            var correctAnsArr = [];

            $(el).find('input[type="checkbox"]:checked').each(function() {
                chosenAnsArr.push($(this).attr('value').trim());
            });

            //if skipped, then return
            if(chosenAnsArr.length <= 0) {
                return 0;
            }

            chosenAnsArr = chosenAnsArr.sort();
            correctAnsArr = decode($(el).find('.key').text()).replace(/[ ]/g, '').toLowerCase().split(',.').sort();


            // Mark all correct ans 'correct-green'
            correctAnsArr.forEach(function(correctAns){
                $(el).find('input[type="checkbox"]').eq(abcd.indexOf(correctAns)).closest('.option-radio-container').addClass('correct-green');
            });



            //Now sort the chosenAnsArr
            //join them with ,. i.e. commaFullStop as that is our delimiter
            var chosenAnsString = chosenAnsArr.join('');
            var keyString = correctAnsArr.join('');

            if(chosenAnsString === keyString) {
                //console.log('correct');
                return 1;
            }
            else {
                //console.log('in correct');

                //mark the incorrect ones red
                chosenAnsArr.forEach(function(ans){
                    //if it is NOT a correct one
                    if(correctAnsArr.indexOf(ans) < 0) {
                        $(el).find('input[type="checkbox"]').eq(abcd.indexOf(ans)).closest('.option-radio-container').addClass('incorrect-red');
                    }
                });

                return -1;
            }
        }

        function checkFITBAns(el) {
            var blanks = $(el).find('input[type="text"]');
            var correctAnsArr = decode($(el).find('.key').text()).replace(/\s+/g, ' ').toLowerCase().split(',.');

            var response = 1;   // 0 = skipped, 1 = correct, -1 = incorrect

            correctAnsArr.forEach(function(txt, indx) {
                var givenAns = blanks.eq(indx).val().trim().toLowerCase() || '';

                // console.log("givenAns len = " + givenAns.length);
                //if blank
                if(givenAns.length <= 0) {
                    //if any of the blank is skipped,
                    //then consider the answer skipped
                    response = 0;
                }
                //if correct
                else if (txt.trim() === givenAns) {
                    blanks.eq(indx).addClass('correct-green');
                    //if nothing is skipped or inccorect the response will
                    //by default remain 1, so nothing to do here
                }
                //else incorrect
                else {
                    blanks.eq(indx).addClass('incorrect-red');
                    //return -1;

                    //if nothing is skipped, but answer is wrong
                    //then mark reponse -1
                    response = -1;
                }
            });

            return response;
        }
    }
    ////////////// END OF EXAM SECTION ///////////////////////////////////
});
