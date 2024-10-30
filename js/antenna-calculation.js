/**
 * This file contains the jQuery used in the actual calculations
 *
 * @package K5HH's Antenna Calculator
 * @since 1.1.0
 */

(function($) {
    $(document).ready(function(){
        // DOM Ready - do your stuff

        // $('#flmetric').text('TEST FULL LENGTH');
        // $('#elmetric').text('TEST EACH LEG');


        var desiredFreqInput = $('#freq');
        var desiredFreq;
        var desiredFreqFloat;
        var swrFreqInput = $('#swrfreq');
        var swrFreq;
        var swrFreqFloat;
        var fullLength;
        var fullMeters;
        var fm;
        var fcm;
        var fmm;

        var eachLeg;
        var eachLegMeters;
        var elm;
        var elcm;
        var elmm;

        var fullLengthb;
        var fullMetersb;
        var fmb;
        var fcmb;
        var fmmb;

        var eachLegb;
        var eachLegMetersb;
        var elmb;
        var elcmb;
        var elmmb;

        var unitValue;
        // var numerator = $('#numerator');
        // var denominator = $('#denominator');

        function setUnits() {
            unitValue = $( 'input[name=units]:checked' ).val();
            $('#selectedUnit').text('Val ' + unitValue);
            if (unitValue === 'imperial') {
                $('#firstresultsboxmetric').css('display', 'none');
                $('#firstresultsbox').css('display', 'block');
                $('#finalresultsboxmetric').css('display', 'none');
                $('#finalresultsbox').css('display', 'block');
            } else if (unitValue === 'metric') {
                $('#firstresultsbox').css('display', 'none');
                $('#firstresultsboxmetric').css('display', 'block');
                $('#finalresultsbox').css('display', 'none');
                $('#finalresultsboxmetric').css('display', 'block');
            }
        }

        setUnits();
        $('input[type=radio]').change(function(){
            setUnits();
        });

        desiredFreqInput.change(function() {
            InitialLength();
        });

        swrFreqInput.change(function() {
            SecondaryLength();
        });

        function EmptyAllValues() {
            desiredFreqInput.val('');
            swrFreqInput.val('');
            $('#mainfreq').text('');

            $('#fl').text('-.-');
            $('#fl-feet').text('-');
            $('#fl-inches').text('-');
            $('#fl-n').text('-');
            $('#fl-d').text('-');

            $('#el').text('-.-');
            $('#el-feet').text('-');
            $('#el-inches').text('-');
            $('#el-n').text('-');
            $('#el-d').text('-');

            $('#fl-b').text('-.-');
            $('#fl-feet-b').text('-');
            $('#fl-inches-b').text('-');
            $('#fl-n-b').text('-');
            $('#fl-d-b').text('-');

            $('#el-b').text('-.-');
            $('#el-feet-b').text('-');
            $('#el-inches-b').text('-');
            $('#el-n-b').text('-');
            $('#el-d-b').text('-');

            $('#flmetric').text('-');
            $('#fl-m').text('-');
            $('#fl-cm').text('-');
            $('#fl-mm').text('-');

            $('#elmetric').text('-');
            $('#el-m').text('-');
            $('#el-cm').text('-');
            $('#el-mm').text('-');

            $('#flmetric-b').text('-');
            $('#fl-m-b').text('-');
            $('#fl-cm-b').text('-');
            $('#fl-mm-b').text('-');

            $('#elmetric-b').text('-');
            $('#el-m-b').text('-');
            $('#el-cm-b').text('-');
            $('#el-mm-b').text('-');
        }

        function DetermineEighths(num) {
            var n;
            var d;
            if(num < 0.0625) {                             //Zero
                n = 0;
                d = 0;
            } else if(num >=0.0625 && num < 0.1875) {     // 1/8
                n = 1;
                d = 8;
            } else if(num >=0.1875 && num < 0.3125) {     // 1/4
                n = 1;
                d = 4;
            } else if(num >=0.03125 && num < 0.4375) {     // 3/8
                n = 3;
                d = 8;
            } else if(num >=0.4375 && num < 0.5625) {     // 1/2
                n = 1;
                d = 2;
            } else if(num >=0.5625 && num < 0.6875) {     // 5/8
                n = 5;
                d = 8;
            } else if(num >=0.6875 && num < 0.8125) {     // 3/4
                n = 3;
                d = 4;
            } else if(num >=0.8125 && num < 0.9375) {     // 7/8
                n = 7;
                d = 8;
            } else if(num >=0.9375) {     // 1/1
                n = 1;
                d = 1;
            }
            return [ n, d ];
        }

        function SeparateNum(num) {
            var i = Math.floor ( num );
            var d = num - Math.floor ( num );

            return [i, d];
        }

        function MakeFeetInches(num) {
            var fullnum = SeparateNum(num);
            var feet = fullnum[0];
            var fullinches = SeparateNum(fullnum[1] * 12);
            var inches = fullinches[0];
            var fracinches = DetermineEighths(fullinches[1]);
            var inchesn = fracinches[0];
            var inchesd = fracinches[1];

            return [feet, inches, inchesn, inchesd];
        }

        function InitialLength() {
            desiredFreq = desiredFreqInput.val();
            desiredFreqFloat = parseFloat(desiredFreq);
            fullLength = 468/desiredFreqFloat;
            eachLeg = 234/desiredFreqFloat;
            fullMeters = (fullLength/3.28).toFixed(3);
            fm = Math.trunc(fullMeters);
            fcm = Math.trunc((fullMeters-fm) * 100);
            fmm = ((fullMeters - fm - (fcm/100)) * 1000).toFixed(0);
            eachLegMeters = (fullMeters/2).toFixed(3);
            elm = Math.trunc(eachLegMeters * 1);
            elcm = Math.trunc((eachLegMeters-elm) * 100);
            elmm = ((eachLegMeters - elm - (elcm/100)) * 1000).toFixed(0);
            var flFeetInches = MakeFeetInches(fullLength);
            var elFeetInches = MakeFeetInches(eachLeg);

            $('#mainfreq').text(desiredFreq + ' MHz');
            $('#fl').text(fullLength.toFixed(6) + '\'');
            $('#fl-feet').text(flFeetInches[0]);
            $('#fl-inches').text(flFeetInches[1]);
            $('#fl-n').text(flFeetInches[2]);
            $('#fl-d').text(flFeetInches[3]);

            $('#el').text(eachLeg.toFixed(6) + '\'');
            // $('#elm').text(eachLeg.toFixed(6) + '\'');
            $('#el-feet').text(elFeetInches[0]);
            $('#el-inches').text(elFeetInches[1]);
            $('#el-n').text(elFeetInches[2]);
            $('#el-d').text(elFeetInches[3]);

            $('#flmetric').text(fullMeters + ' meters');
            $('#fl-m').text(fm);
            $('#fl-cm').text(fcm);
            $('#fl-mm').text(fmm);

            $('#elmetric').text(eachLegMeters + ' meters');
            $('#el-m').text(elm);
            $('#el-cm').text(elcm);
            $('#el-mm').text(elmm);
        }

        function SecondaryLength() {
            swrFreq = swrFreqInput.val();
            swrFreqFloat = parseFloat(swrFreq);
            eachLegb = swrFreqFloat / desiredFreqFloat * eachLeg;
            fullLengthb = eachLegb * 2;

            fullMetersb = (fullLengthb/3.28).toFixed(3);
            fmb = Math.trunc(fullMetersb * 1);
            fcmb = Math.trunc((fullMetersb-fmb) * 100);
            fmmb = ((fullMetersb - fmb - (fcmb/100)) * 1000).toFixed(0);
            eachLegMetersb = (fullMetersb/2).toFixed(3);
            elmb = Math.trunc(eachLegMetersb);
            elcmb = Math.trunc((eachLegMetersb-elmb) * 100);
            elmmb = ((eachLegMetersb - elmb - (elcmb/100)) * 1000).toFixed(0);

            var flfib = MakeFeetInches(fullLengthb);
            var elfib = MakeFeetInches(eachLegb);

            $('#fl-b').text(fullLengthb.toFixed(6) + '\'');
            $('#fl-feet-b').text(flfib[0]);
            $('#fl-inches-b').text(flfib[1]);
            $('#fl-n-b').text(flfib[2]);
            $('#fl-d-b').text(flfib[3]);

            $('#el-b').text(eachLegb.toFixed(6) + '\'');
            $('#el-feet-b').text(elfib[0]);
            $('#el-inches-b').text(elfib[1]);
            $('#el-n-b').text(elfib[2]);
            $('#el-d-b').text(elfib[3]);

            $('#flmetric-b').text(fullMetersb + ' meters');
            $('#fl-m-b').text(fmb);
            $('#fl-cm-b').text(fcmb);
            $('#fl-mm-b').text(fmmb);

            $('#elmetric-b').text(eachLegMetersb + ' meters');
            $('#el-m-b').text(elmb);
            $('#el-cm-b').text(elcmb);
            $('#el-mm-b').text(elmmb);
        }

        $('#clearbutton').on('click', EmptyAllValues);


    });
})( jQuery );