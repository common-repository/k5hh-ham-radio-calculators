<?php
/**
 * This file is the form for the Dipole Calculator
 *
 * @package K5HH's Antenna Calculator
 * @since 1.1.0
 */

// Make sure the plugin is accessed through the appropriate channels
defined('ABSPATH') || die;

// Function to add subscribe text to posts and pages
function dipole_calculator_shortcode() {
    ?>

    <form action="" id="antennacalcform" onsubmit="return false;">
        <fieldset>
            <legend>DIPOLE CALCULATOR</legend>

            <div id="inputs">
                <p><input type="radio" class="unitsclass" name="units" value="imperial" checked /> Imperial</p>
                <p>&nbsp;</p>
                <p><input type="radio" class="unitsclass" name="units" value="metric" /> Metric</p>
                <p>&nbsp;</p>
                <hr>
                <p>
                    <label for="freq">Enter your desired frequency in MHz</label><br>
                    <input type="text" id="freq" name="freq" value="" size="15"  />
                </p>
                <p>
                    <label for="swrfreq">After setting up your dipole with the lengths listed to the right, retest the SWR, find the frequency with the lowest SWR and enter that frequency in MHz below. New dipole length will show up below.</label><br>
                    <input type="text" id="swrfreq" name="swrfreq" value="" size="15"  />
                </p>
                <p>
                    <button type="button" id="clearbutton">Clear</button>
                </p>
            </div>

            <div id="firstresultsbox">
                <p>
                    Desired Frequency:<br>
                    <span id="mainfreq" class="mainfreq"></span>
                </p>
                <hr style="margin-bottom:8px">
                <p>
                    Full Dipole Length<br>
                    <span id="fulllength"><span id="fl-feet">-</span>' <span id="fl-inches">-</span> <span id="fl-fracs"><sup><span id="fl-n">-</span></sup>&frasl;<sub><span id="fl-d">-</span></sub></span>"</span><br>
                    <span id="fl">-</span>
                </p>
                <hr style="margin-bottom:8px">
                <p>
                    Each Side/Leg<br>
                    <span id="eachleg"><span id="el-feet">-</span>' <span id="el-inches">-</span> <span id="el-fracs"><sup><span id="el-n">-</span></sup>&frasl;<sub><span id="el-d">-</span></sub></span>"</span><br>
                    <span id="el">-</span>
                </p>
            </div>

            <div id="firstresultsboxmetric">
                <p>
                    Desired Frequency:<br>
                    <span id="mainfreq" class="mainfreq"></span>
                </p>
                <hr style="margin-bottom:8px">
                <p>
                    Full Dipole Length<br>
                    <span id="fulllengthm"><span id="fl-m">-</span>m <span id="fl-cm">-</span>cm <span id="fl-mm">-</span>mm</span><br>
                    <span id="flmetric">-.--</span>
                </p>
                <hr style="margin-bottom:8px">
                <p>
                    Each Side/Leg<br>
                    <span id="eachlegm"><span id="el-m">-</span>m <span id="el-cm">-</span>cm <span id="el-mm">-</span>mm</span><br>
                    <span id="elmetric">-.--</span>
                </p>
            </div>

            <div id="finalresultsbox">
                <p>Now reset the length of your dipole to the length below and you should be resonant on your desired frequency.</p>
                <p>
                    <span id="fulllength-b"><span id="fl-feet-b">-</span>' <span id="fl-inches-b">-</span> <span id="fl-fracs-b"><sup><span id="fl-n-b">-</span></sup>&frasl;<sub><span id="fl-d-b">-</span></sub></span>"</span> = Full Dipole Length
                    <br><span id="fl-b">-.-'</span>
                </p>
                <p>
                    <span id="eachleg-b"><span id="el-feet-b">-</span>' <span id="el-inches-b">-</span> <span id="el-fracs-b"><sup><span id="el-n-b">-</span></sup>&frasl;<sub><span id="el-d-b">-</span></sub></span>"</span> = Each Side/Leg
                    <br><span id="el-b">-.- ft.</span>
                </p>
                <hr>
                <p class="disclaimer">The K5HH Antenna Calculators are for demonstration purposes only and may not reflect actual numbers for your equipment. I have, in good faith, given my best efforts to provide a calculator that will save ham operators time in setting up their antennas. However, ultimate responsibility for the proper use of your equipment lies with you. v1.1.0</p>

            </div>

            <div id="finalresultsboxmetric">
                <p>Now reset the length of your dipole to the length below and you should be resonant on your desired frequency.</p>
                <p>
                    Full Dipole Length<br>
                    <span id="fulllengthm-b"><span id="fl-m-b">-</span>m <span id="fl-cm-b">-</span>cm <span id="fl-mm-b">-</span>mm</span><br>
                    <span id="flmetric-b">-.--</span>
                </p>
                <p>
                    Each Side/Leg<br>
                    <span id="eachlegm-b"><span id="el-m-b">-</span>m <span id="el-cm-b">-</span>cm <span id="el-mm-b">-</span>mm</span><br>
                    <span id="elmetric-b">-.--</span>
                </p>
                <hr>
                <p class="disclaimer">The K5HH Antenna Calculators are for demonstration purposes only and may not reflect actual numbers for your equipment. I have, in good faith, given my best efforts to provide a calculator that will save ham operators time in setting up their antennas. However, ultimate responsibility for the proper use of your equipment lies with you. v1.1.0</p>

            </div>

        </fieldset>
    </form>
    <?php
}

add_shortcode('dipole_calculator', 'dipole_calculator_shortcode');