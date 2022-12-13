import '../../assets/styles/css/particles/google-map.css'

function GoogleMap() {
  return (
    // <iframe 
    //   className="google-map"
    //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.1441154667605!2d-73.98990058459566!3d40.692823579334075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4bc1eb7b11%3A0xe7c3b030eca87b7b!2zMzcwIEpheSBTdCAjMTJ0aCwgQnJvb2tseW4sIE5ZIDExMjAxLCDQodCo0JA!5e0!3m2!1sru!2sby!4v1662626296504!5m2!1sru!2sby" 
    //   allowFullScreen="" 
    //   loading="lazy" 
    //   title="google-map"
    //   referrerPolicy="no-referrer-when-downgrade">
    // </iframe>

    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12100.576385469798!2d-73.987712!3d40.692824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4bc1eb7b11%3A0xe7c3b030eca87b7b!2s370%20Jay%20St%20%2312th%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e0!3m2!1sen!2sby!4v1669228232551!5m2!1sen!2sby" 
      className="google-map" 
      allowfullscreen="" 
      loading="lazy" 
      title="google-map"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  );
}

export default GoogleMap