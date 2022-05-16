import $ from 'jquery'
import { useEffect } from 'react';

const Lite = () => {

  useEffect (() => {
    $(".linksPls").hide();

    $("#twoot1").dblclick(() => {
      $("#twoot1").remove();
    });

    $(".noTwoot2").click(function() {
      $("#twoot2").remove();
      $(".noTwoot2").remove();
    });

    $("#twoot3").mouseenter(() => {
      $("#twoot3").hide();
    });

    $(".noLinks").click(function() {
      $("[href]").hide();
      $(".noLinks").hide();
      $(".linksPls").fadeIn(1000);
    });

    $(".linksPls").click(function() {
      $("[href]").show();
      $(".linksPls").hide();
    });

    $(".noOddRows").click(function() {
      $("tr:odd").hide();
      $(".noOddRows").hide();
    });

    $(".appendOi").click(function() {
      $("#twoot4").empty();
      $("#twoot4").append("oi");
      $(".appendOi").remove();
    });

    $(".makeFire").click(function() {
      $("#twoot5").empty();
      $("#twoot5").append("<img src='https://ct.mob0.com/Previews/1169711118.gif' />");
      $("#twoot5").css("border", "10px dashed orange");
      $(".makeFire").remove();
    });

    $(".hideTwoot0").click(function() {
      $("p").first().hide();
      $(".hideTwoot0").hide();
    });

    $(".refreshPage").click(function() {
      window.location.reload();
    });

  }, []);

  return (
    <div>
      <h3>Lite</h3>
      <p id='twoot0'>Twoot 0</p> 
      <p id='twoot1'>Twoot 1. double click to remove.</p>
      <p id='twoot2'>Twoot 2.</p>
      <button className='noTwoot2'>Remove twoot 2</button>
      <p id='twoot3'>Twoot 3. mouse over to hide.</p>
      <div>
        <a href='/'>Go Home </a>
        <button className='noLinks'>Remove all links</button>
        <button className='linksPls'> Wait no bring them back </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>header1</th>
            <th>header2</th>
            <th>header3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text1.1</td>
            <td>text1.2</td>
            <td>text1.3</td>
          </tr>
          <tr>
            <td>text2.1</td>
            <td>text2.2</td>
            <td>text2.3</td>
          </tr>
          <tr>
            <td>text3.1</td>
            <td>text3.2</td>
            <td>text3.3</td>
          </tr>
          <tr>
          </tr>
        </tbody>
      </table>

      <button className='noOddRows'>No Odd Rows on table</button>

      <p id='twoot4'>Twoot 4.</p>
      <button className='appendOi'>Turn twoot 4 into oi.</button>

      <p id='twoot5'>Twoot 5. fire.</p>
      <button className='makeFire'>Make twoot 5 more fire.</button>
      
      <div>
        <button className='hideTwoot0'>Hide twoot 0</button>
      </div>

      <div>
        <button className='refreshPage'>Refresh Page</button>
      </div>
      
    </div>
  )
}

export default Lite