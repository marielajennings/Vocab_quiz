/*
 * Example plugin template
 */

jsPsych.plugins["visualize-score"] = (function() {

  var plugin = {};

plugin.info = {
    name: 'visualize-score',
    description: '',
    parameters: {
      score_individual: {
        type: [jsPsych.plugins.parameterType.INTEGER],
        array: false,
        default: undefined,
        no_function: false,
        description: ''
      },
      score_overall: {
        type: [jsPsych.plugins.parameterType.INTEGER],
        array: false,
        default: undefined,
        no_function: false,
        description: ''
      }
       }};



  plugin.trial = function(display_element, trial) {

    // set default values for parameters
    trial.score_individual = trial.score_individual || 0;
    trial.score_overall=trial.score_overall || 0;

    // allow variables as functions
    // this allows any trial variable to be specified as a function
    // that will be evaluated when the trial runs. this allows users
    // to dynamically adjust the contents of a trial as a result
    // of other trials, among other uses. you can leave this out,
    // but in general it should be included
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);


<p>Your score:</p>
<div class="container">
  <div id="your score"></div>
</div>

<p>Among native English speakers of your age and education,
you did as well as or better than:</p>
<div class="container">
  <div id="overall score"></div>
</div>

document.getElementById('your score').innerHTML = ;



    // end trial
    jsPsych.finishTrial();
  };

  return plugin;
})();
