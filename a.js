<header class="page__header">
  {% include 'breadcrumb' %}

  <div class="page__header-wrapper">
    <div class="container">
      <h1 class="page__title">{{ page.title }}</h1>
    </div>
  </div>
</header>

<section class="page__content">
  <div class="container container--shrink">
    <div class="rte">
      <div id='carat' class='carat'>
        <div class='a_coll'>Carat Weight</div>
        <div class='b_coll'>
          <select id="carat_s" name='carat' >
            <option value="{{ settings.carat_weight_price_1 }}">{{ settings.carat_weight_1 }}</option>
            <option value="{{ settings.carat_weight_price_2 }}">{{ settings.carat_weight_2 }}</option>
            <option value="{{ settings.carat_weight_price_3 }}">{{ settings.carat_weight_3 }}</option>
            <option value="{{ settings.carat_weight_price_4 }}">{{ settings.carat_weight_4 }}</option>
            <option value="{{ settings.carat_weight_price_5 }}">{{ settings.carat_weight_5 }}</option>
            <option value="{{ settings.carat_weight_price_6 }}">{{ settings.carat_weight_6 }}</option>
            <option value="{{ settings.carat_weight_price_7 }}">{{ settings.carat_weight_7 }}</option>
            <option value="{{ settings.carat_weight_price_8 }}">{{ settings.carat_weight_8 }}</option>
            <option value="{{ settings.carat_weight_price_9 }}">{{ settings.carat_weight_9 }}</option>
            <option value="{{ settings.carat_weight_price_10 }}">{{ settings.carat_weight_10 }}</option>
          </select>
        </div>
        <div style='clear: both;'></div>
      </div>
      <br>
      <div id='color' class='color'>
        <div class='a_coll'>Color</div>
        <div class='b_coll'>
          <select id="color_s" name='color'>
            <option value="{{ settings.color_price_1 }}">{{ settings.color_1 }}</option>
            <option value="{{ settings.color_price_2 }}">{{ settings.color_2 }}</option>
            <option value="{{ settings.color_price_3 }}">{{ settings.color_3 }}</option>
            <option value="{{ settings.color_price_4 }}">{{ settings.color_4 }}</option>
            <option value="{{ settings.color_price_5 }}">{{ settings.color_5 }}</option>
            <option value="{{ settings.color_price_6 }}">{{ settings.color_6 }}</option>
            <option value="{{ settings.color_price_7 }}">{{ settings.color_7 }}</option>
            <option value="{{ settings.color_price_8 }}">{{ settings.color_8 }}</option>
            <option value="{{ settings.color_price_9 }}">{{ settings.color_9 }}</option>
            <option value="{{ settings.color_price_10 }}">{{ settings.color_10 }}</option>
          </select>
        </div>
        <div style='clear: both;'></div>
      </div>
      <br>
      <div id='clarity' class='clarity'>
        <div class='a_coll'>Clarity</div>
        <div class='b_coll'>
          <select id="clarity_s" name='clarity'>
            <option value="{{ settings.clarity_price_1 }}">{{ settings.clarity_1 }}</option>
            <option value="{{ settings.clarity_price_2 }}">{{ settings.clarity_2 }}</option>
            <option value="{{ settings.clarity_price_3 }}">{{ settings.clarity_3 }}</option>
            <option value="{{ settings.clarity_price_4 }}">{{ settings.clarity_4 }}</option>
            <option value="{{ settings.clarity_price_5 }}">{{ settings.clarity_5 }}</option>
            <option value="{{ settings.clarity_price_6 }}">{{ settings.clarity_6 }}</option>
            <option value="{{ settings.clarity_price_7 }}">{{ settings.clarity_7 }}</option>
            <option value="{{ settings.clarity_price_8 }}">{{ settings.clarity_8 }}</option>
            <option value="{{ settings.clarity_price_9 }}">{{ settings.clarity_9 }}</option>
            <option value="{{ settings.clarity_price_10 }}">{{ settings.clarity_10 }}</option>
          </select>
        </div>
        <div style='clear: both;'></div>
      </div>      
      <br>
      <div id='shape' class='shape'>
        <div class='a_coll'>Shape</div>
        <div class='b_coll'>
          <select id="shape_s" name='shape'>
            <option value="{{ settings.shape_price_1 }}">{{ settings.shape_1 }}</option>
            <option value="{{ settings.shape_price_2 }}">{{ settings.shape_2 }}</option>
          </select>
        </div>
        <div style='clear: both;'></div>
      </div>
      <br>
      <div id='cut' class='cut'>
        <div class='a_coll'>Cut</div>
        <div class='b_coll'>
          <select id="cut_s" name='cut'>
            <option value="{{ settings.cut_price_1 }}">{{ settings.cut_1 }}</option>
            <option value="{{ settings.cut_price_2 }}">{{ settings.cut_2 }}</option>
            <option value="{{ settings.cut_price_3 }}">{{ settings.cut_3 }}</option>
            <option value="{{ settings.cut_price_4 }}">{{ settings.cut_4 }}</option>
          </select>
        </div>
        <div style='clear: both;'></div>
      </div>      
      <br>
      <div id='certificate' class='certificate'>
        <div class='a_coll'>Certificate</div>
        <div class='b_coll'>
          <select id="certificate_s" name='certificate'>
            <option value="{{ settings.certificate_price_1 }}">{{ settings.certificate_1 }}</option>
            <option value="{{ settings.certificate_price_2 }}">{{ settings.certificate_2 }}</option>
            <option value="{{ settings.certificate_price_3 }}">{{ settings.certificate_3 }}</option>
            <option value="{{ settings.certificate_price_4 }}">{{ settings.certificate_4 }}</option>
          </select>
        </div>
        <div style='clear: both;'></div>
      </div>
      <br>
      <div class='calculate'>
      	<div id="calculate" class="button--full button--secondary product__bid">Calculate</div>
      </div>

      <span>Diamond Price:</span><span id='total_price'></span>
      <br>
      <div class='contact'>
        <div id="contact" class="button--full button--secondary product__bid"><a href='https://www.bitdials.eu/pages/bitdials-bitcoin-luxury-boutique-contact-us' target="_blank">Contact</a></div>
      </div>
    </div>
  </div>
</section>

<style>
  .a_coll, .b_coll {
  	width: 48%;
    float: left;
  }
  #calculate, #contact {
    width: 150px !important;
    padding:10px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 2px;
    margin-left: 0px;
  }
  .contact {
  	display:none;
  }
  #contact a {
  	color: #fff;
    
  }
  
</style>
<script>

$( "#calculate" ).click(function() {
  result = parseFloat($( "#carat_s" ).val()) + parseFloat($( "#color_s" ).val()) + parseFloat($( "#clarity_s" ).val()) + parseFloat($( "#shape_s" ).val()) + parseFloat($( "#cut_s" ).val()) + parseFloat($( "#certificate_s" ).val())
  $('#total_price').text(result);
  $('.contact').show();
}); 
</script>