import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import Age from './age-calculator';
import LifeExpectancy from './life-expectancy-calculator';

$(document).ready(function() {
  $('#age-calc').submit(function(event) {
    event.preventDefault();
    let earthYrs = parseInt($('#earth-yrs').val());
    let userAge = new Age(earthYrs);
    let remainingYrs = new LifeExpectancy(earthYrs);

    let mercuryLivedYrs = userAge.getMercuryYrs();
    let venusLivedYrs = userAge.getVenusYrs();
    let marsLivedYrs = userAge.getMarsYrs();
    let jupiterLivedYrs = userAge.getJupiterYrs();

    let mercuryRemainingYrs = remainingYrs.getMercuryRemaininYrs();
    let venusRemainingYrs = remainingYrs.getVenusRemaininYrs();
    let marsRemainingYrs = remainingYrs.getMarsRemaininYrs();
    let jupiterRemainingYrs = remainingYrs.getJupiterRemaininYrs();
    $("#results").show();
    $('#mercury-yrs').text(mercuryLivedYrs);
    $('#venus-yrs').text(venusLivedYrs);
    $('#mars-yrs').text(marsLivedYrs);
    $('#jupiter-yrs').text(jupiterLivedYrs);

    $('#mercury-remaining-yrs').text(mercuryRemainingYrs);
    $('#venus-remaining-yrs').text(venusRemainingYrs);
    $('#mars-remaining-yrs').text(marsRemainingYrs);
    $('#jupiter-remaining-yrs').text(jupiterRemainingYrs);
  });
});