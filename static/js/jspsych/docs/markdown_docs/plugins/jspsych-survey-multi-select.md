# jspsych-survey-multi-select plugin

The survey-multi-select plugin displays a set of questions with multiple choice response fields. The subject selects a single answer.

## Parameters

This table lists the parameters associated with this plugin. Parameters with a default value of *undefined* must be specified. Other parameters can be left unspecified if the default value is acceptable.

Parameter | Type | Default Value | Description
----------|------|---------------|------------
questions | array | *undefined* | An array of strings. The strings are the prompts/questions that will be associated with a group of options (check boxes). All questions will get presented on the same page (trial).
options | array |  *undefined* | An array of arrays. The innermost arrays contain a set of options to display for an individual question. The length of the outer array should be the same as the number of questions.
required | array | null | An array of boolean values. Each boolean indicates if a question is required (`true`) or not (`false`), using the HTML5 `required` attribute. The length of this array should correspond to the length of the questions array. If this parameter is undefined, all questions will be optional. Note: The HTML5 `required` attribute is [not currently supported by the Safari browser][1].
horizontal | boolean | false | If true, then questions are centered and options are displayed horizontally.
alignment | string | left | Alignment of questions in horizontal mode (left, right, center).
preamble | string | empty string | HTML formatted string to display at the top of the page above all the questions. 
correct | array | *undefined* | An array of arrays of strings. The strings are the correct answers associated with each subquestion. There must be as many interior arrays as there are subquestions, and in the same order. If value is `[["NA"]]`, no feedback is displayed and force_correct has no effect. If the value of an interior array is []. 
force_correct | boolean | true | Require correct response before continuing? Only applies if `correct != [["NA"]]`.

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Browser_compatibility

## Data Generated

In addition to the [default data collected by all plugins](overview#datacollectedbyplugins), this plugin collects the following data for each trial.

Name | Type | Value
-----|------|------
responses | JSON string | An array containing the prompt and all selected choices in JSON format for each sub-question. The encoded object will have a separate variable for the prompt and response to each sub-question, with the first question in the trial being recorded in `A0` and the answer as `Q0`, the second in `Q1` and `A1`, and so on. The responses are recorded as the name of the option label.
rt | numeric | The response time in milliseconds for the subject to make a response. The time is measured from when the questions first appear on the screen until the subject's response.
preamble | string | The preamble for the question.
superq | string | The super-queestion for the question.

## Examples

#### Basic example with multiple questions on a page.

```javascript
    // defining groups of questions that will go together.
    var page_1_questions = ["I like vegetables.", "I like fruit."];

    // definiting two different response scales that can be used.
    var page_1_options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
    var page_2_options = ["Strongly Disagree", "Disagree", "Somewhat Disagree", "Neural", "Somewhat Agree", "Agree", "Strongly Agree"];

    var multi_choice_block = {
        type: 'survey-multi-select',
        questions: page_1_questions,
        options: [page_1_options, page_2_options],  // need one scale for every question on a page
        required: [true, false]   // set whether questions are required
    };

    var multi_choice_block_horizontal = {
        type: 'survey-multi-select',
        questions: page_1_questions,
        options: [page_1_options, page_2_options],  // need one scale for every question on a page
        required: [true, false],   // set whether questions are required
        horizontal: true  // centres questions and makes options display horizontally
    };

    jsPsych.init({
      timeline: [multi_choice_block, multi_choice_block_horizontal],
      on_finish: function() {
        jsPsych.data.displayData();
      }
    });
```
