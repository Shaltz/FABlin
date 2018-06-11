NDSummary.OnToolTipsLoaded("File:Marlin_main.cpp",{5:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5\" class=\"NDPrototype NoParameterForm\">FORCE_INLINE <span class=\"SHKeyword\">void</span> init ()</div><div class=\"TTSummary\">Initialize data structures</div></div>",6:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> print_heaterstates (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">tp_report_t&nbsp;</td><td class=\"PName last\">format</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Prints a report of heater(s) state and temperature(s) level</div></div>",50:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype50\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">inline bool</span> verify_z_probed ()</div><div class=\"TTSummary\">Verify the probe is engaged</div></div>",51:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype51\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> run_fast_z_probe(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">feedrateProbing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Run a fast probe with the optional Z probe</div></div>",52:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype52\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> power_enable_heater (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">uint8_t&nbsp;</td><td class=\"PName last\">heater_id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Turn on a heater line by numeric index</div></div>",53:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype53\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> power_disable_heater (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">uint8_t&nbsp;</td><td class=\"PName last\">heater_id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Shut down a heater line by numeric index</div></div>",54:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype54\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">char</span> I2C_read(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>&nbsp;</td><td class=\"PName last\">i2c_register</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Read a byte from an I2C slave</div></div>",55:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Home all Axis using z-axis MINZ endstop</div></div>",70:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype70\" class=\"NDPrototype NoParameterForm\">G30 [U&lt;feedrate_up&gt;]</div><div class=\"TTSummary\">Single Z-Probe</div></div>",56:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Single Z probe at current XY location using external probe</div></div>",57:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype57\" class=\"NDPrototype NoParameterForm\">M42 [P&lt;pin_n&gt;] [S0-<span class=\"SHNumber\">1</span>]</div><div class=\"TTSummary\">Switch or read I/O pin</div></div>",8:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Configure debug output(s)</div></div>",9:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Set laser power immediately.</div></div>",10:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Finish moves and set laser power</div></div>",11:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Turn off laser</div></div>",58:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype58\" class=\"NDPrototype NoParameterForm\">M104 [T&lt;tool&gt;] [S&lt;temp&gt;]</div><div class=\"TTSummary\">Set Hotend Temperature</div></div>",59:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype59\" class=\"NDPrototype NoParameterForm\">M105 [T&lt;tool&gt;]</div><div class=\"TTSummary\">Report Temperatures</div></div>",60:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype60\" class=\"NDPrototype NoParameterForm\">M85 S&lt;max_inactive_time_s&gt;</div><div class=\"TTSummary\">Set max inactivity timeout</div></div>",12:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Set laser security timeout</div></div>",13:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Automatically send temperatures</div></div>",61:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype61\" class=\"NDPrototype NoParameterForm\">M450 [S&lt;mode&gt;]</div><div class=\"TTSummary\">Set or report working mode</div></div>",74:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype74\" class=\"NDPrototype NoParameterForm\">M563 [P&lt;tool&gt;] [D&lt;drive&gt;] [H&lt;temp_conf] [S&lt;serial&gt;]</div><div class=\"TTSummary\">Define or remove a tool</div></div>",14:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Restrict axes movements to the set limits</div></div>",73:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype73\" class=\"NDPrototype NoParameterForm\">M575 P&lt;<span class=\"SHKeyword\">if</span>&gt; [R&lt;rx&gt;] [T&lt;tx&gt;] B&lt;baud&gt;</div><div class=\"TTSummary\">Set communication parameters</div></div>",62:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype62\" class=\"NDPrototype NoParameterForm\">M700 S&lt;power&gt;</div><div class=\"TTSummary\">Laser power control</div></div>",63:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype63\" class=\"NDPrototype NoParameterForm\">M720 [H&lt;<span class=\"SHNumber\">0</span>-<span class=\"SHNumber\">1</span>&gt;]</div><div class=\"TTSummary\">24VDC power ON</div></div>",64:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype64\" class=\"NDPrototype NoParameterForm\">M720 [H&lt;<span class=\"SHNumber\">0</span>-<span class=\"SHNumber\">1</span>&gt;]</div><div class=\"TTSummary\">Disable 24vdc power lines</div></div>",19:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Raspberry alive</div></div>",67:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Raspberry sleep</div></div>",65:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype65\" class=\"NDPrototype NoParameterForm\">M733 S&lt;enable&gt;</div><div class=\"TTSummary\">Configure homing check</div></div>",16:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Monitor warning settings</div></div>",68:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype68\" class=\"NDPrototype NoParameterForm\">M735 S&lt;<span class=\"SHNumber\">0</span>,<span class=\"SHNumber\">1</span>&gt;</div><div class=\"TTSummary\">Enable/disable silent mode (sounds except for power-on)</div></div>",15:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">Read SECURE_SWITCH sensor</div></div>",66:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype66\" class=\"NDPrototype NoParameterForm\">M746 [S&lt;<span class=\"SHNumber\">0</span>-<span class=\"SHNumber\">2</span>&gt;]</div><div class=\"TTSummary\">Set/get external probe source</div></div>",72:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype72\" class=\"NDPrototype NoParameterForm\">M790 P&lt;<span class=\"SHKeyword\">if</span>&gt; [<span class=\"SHString\">&quot;&lt;text&gt;&quot;</span>]</div><div class=\"TTSummary\">Send text to communication interface</div></div>",78:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype78\" class=\"NDPrototype NoParameterForm\">M793 [S&lt;id&gt;]</div><div class=\"TTSummary\">Set/read installed add-on soft-ID</div></div>",71:"<div class=\"NDToolTip TCommand LC\"><div class=\"TTSummary\">STOP Restart</div></div>",18:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype18\" class=\"NDPrototype NoParameterForm\">M2208 [Rmres] [Sen_spreadCycle]</div><div class=\"TTSummary\">Init TMC2208 driver</div></div>",76:"<div class=\"NDToolTip TCommand LC\"><div id=\"NDPrototype76\" class=\"NDPrototype NoParameterForm\">T&lt;tool&gt;</div><div class=\"TTSummary\">Select Tool</div></div>"});