function loadProfile() {
  const h2 = document.querySelector('h2');
  h2.textContent = 'Profile';

  const content = document.querySelector('#content');
  const image = document.createElement('img');

  image.setAttribute('src', 'images/lauren.png');
  image.setAttribute('alt', 'Lauren in her art studio');
  image.setAttribute('id', 'profile-img');
  content.appendChild(image);

  const bio = document.createElement('div');
  bio.setAttribute('id', 'bio');
  const para = document.createElement('p');
  para.innerHTML = 'Lauren Mendelsohn-Bass is a Los Angeles born painter who received her Bachelor of Arts at the University of California, Los Angeles. Her work takes the viewer on a journey through the word of superficial reality where artificially alluring and nostalgically innocent context marks darker thought, ideas and actions. Playing on the visual tropes of mass marketing and vintage advertisements, her work explores the ways reality is obscured when presented as ostensibly attractive. As popular culture navigates an era of “fake news”, social media, and alternative facts, nothing is as it seems. Her paintings examine today’s culture where truth is fluid; ideas issues and events are routinely reframed to reinforce brand, and even daily life is depicted in a series of perfectly posed, edited and filtered images on social media.'
+ '<br><br>'
+ 'Guilty pleasures are portrayed in a vibrant world of bold imagery. Her work delves into society’s complex emotions around what we desire, and more specifically, the mass marketed idea of desirability in lifestyle, perception, physical characteristics, conspicuous consumption and more. Luscious color and alluring imagery is expertly depicted with great detail in order to seduce the senses. The artist wields realism as a means to expose the lack of reality in socially constructed norms.'
+ '<br><br>'
+ 'Inspired by 1950’s era advertising, Mendelsohn-Bass evokes a classic Film Noir feel and its emotive German Expressionist roots. Mixing pop imagery and classic noir iconography, she draws the viewer into an enticing sugar coated world, only to find all is not as sweet as it appears. The work appeals to a nostalgic longing for an idealized mechanism to identify villain and hero. In the classic films it was so easy, but careful branding and cultivation of image has made it harder to see the core characteristics of public figures, products and events. Through juxtapositions of symbolic and stylized iconic imagery with high emotional content, her paintings maintain a sense of dramatic tension. The mystery and drama of noir is retained while swapping the dark urban landscape of Hollywood classic films for bright candy colors and a façade of beautiful perfection.';
  bio.appendChild(para);
  content.appendChild(bio);

  const heading = document.createElement('h3');
  heading.textContent = 'SELECTED EXHIBITIONS';
  content.appendChild(heading);

  const exhibitionsList = document.createElement('ul');

  const exhibitions = [
    '2023 - "Sugar Coated Supersized," Founder\'s Hall Gallery SOKA University, Aliso Viejo, CA',
    '2022 - "Made in California," Brea Gallery, Brea, CA',
    '2022 - "The Other Art Fair," Los Angeles, CA',
    '2022 - "WAIT GAIN," Dab Art Co, Los Angeles, CA',
    '2022 - "real ART," Agoura Hills, CA',
    '2021 - "Open Theme," Las Laguna Art Gallery, Laguna Beach, CA',
    '2021 - "Informationary," LAAA Gallery 825, Los Angeles, CA',
    '2020 - "Aurora," LAAA Gallery 825, Los Angeles, CA,',
    '2020 - "Tapas," Thinkspace Gallery, Los Angeles, CA',
    '2020 - "Fairy Tales," Newport Beach Library, Newport Beach, CA',
    '2020 - "Sugar Coated," Truckee Meadows College Art Gallery, Reno, NV',
    '2019 - "Holiday Show," Fabrik Projects, Los Angeles, CA',
    '2019 - "Femella," Golden West College Art Gallery, Huntington Beach, CA',
    '2019 - "Art Under Cover," Shoebox Projects, Los Angeles, CA',
    '2019 - "LA Open," TAG Gallery, Los Angeles, CA',
    '2019 - "Let Me Eat Cake Too," Blue Roof Studios, Los Angeles, CA',
    '2019 - "Her," Black Umbrella Gallery, Garden Grove, CA',
    '2018 - "Candy Coated," Shoebox Projects, Los Angeles, CA',
    '2018 - KAABOO Del Mar with Art on Scene, San Diego, CA',
    '2018 - "Reimagining America," ACE/121 Gallery, Glendale, CA',
    '2018 - "Imagine," Blue Roof Studio Arts Festival, Los Angeles, CA',
    '2018 - "The Next Big Thing," Studio Channel Islands, Camarillo, CA',
    '2018 - "Let Me Eat Cake," POST Gallery, Los Angeles, CA',
    '2018 - "Tiny Elephant, Giant Mouse," Gestalt Projects, Los Angeles, CA',
    '2018 - "MADE In California," City of Brea Art Gallery, Brea, CA',
    '2018 - "Hungry," ShockBoxx, Hermosa Beach, CA',
    '2018 - "Art In A New Place," Art Exchange, Long Beach, CA',
    '2018 - "CASA Wine and Art Auction," Los Angeles, CA',
    '2017 - "Art in Place," Venice Institute of Contemporary Art, Long Beach, CA',
    '2017 - "Wish List 5," Gabba Gallery, Los Angeles, CA',
    '2017 - "Unintended Consequences," The Chaffey Community Museum of Art, Ontario, CA',
    '2017 - "Back to School Special," Art on Scene, Hollywood, CA',
    '2017 - "In the Now," The Whole 9 Gallery, Culver City, CA',
    '2017 - "High Priestess," LA Art Share, Los Angeles, CA',
    '2017 - "It Was All a Dream," CAVE Gallery, Venice, CA',
    '2016 - "Vanity Pop," Launch Gallery, Culver City, CA',
    '2016 - "The Pulp Show," Hale Arts Space, Santa Monica, CA',
    '2016 - "60 Americans," The Makeshift Museum, Los Angeles, CA',
    '2016 - Lamperouge Gallery, Brewery Art Complex, Los Angeles, CA',
    '2016 - 5th Annual CA 101 2016 Art Exhibition, South Bay Galleria, Redondo Beach, CA',
    '2016 - Oddville, A Creative Space, Los Angeles, CA',
    '2016 - "CAL / ACLU Art in a Free Society Juried Show," San Fernando Valley Arts & Cultural Center, Tarzana, CA',
    '2015 - "Prime Cuts," Roam Gallery, Topanga, CA',
    '2015 - "Victory Fashion Event," Think Tank Gallery, Los Angeles, CA',
    '2015 - "Cannibal Flower," Los Angeles, CA',
    '2015 - "Kool Layed," Gabba Gallery, Los Angeles, CA',
    '2014 - "The Bridge Between Us," 11:11 A Creative Collective, Tarzana, CA',
    '2006 – 1st place at the Women’s Festival of the Arts Juried Exhibition, 2nd City Council Gallery, Long Beach, CA',
    '2005 – “A Life Examined,” TAG The Artists Gallery, Santa Monica, CA',
    '2004 – 3rd place at the Women’s Festival of the Arts Juried Exhibition, 2nd City Council Gallery, Long Beach, CA',
    '2004 - Los Angeles Municipal Art Gallery, Los Angeles, CA',
    '2000 – Palazzeti, Los Angeles, CA',
    '1999 – Empiric, Los Angeles, CA',
    '1998 – Tah Gallery, Pasadena, CA',
    '1998 – Artcore Brewery Annex, Los Angeles, CA',
    '1997-1998 – L.A. Current: A Media Fusion, UCLA Armand Hammer Art Rental and Sales Gallery, Los Angeles, CA',
    '1997 – The Furniture Café, North Hollywood, CA',
    '1995 – Desmond Gallery, Hollywod, CA',
    '1993-1995 – Art Rental and Sales Gallery, Los Angeles County Museum of Art, CA',
    '1993 – “Censored,” Installations One, Encino, CA',
    '1992 – “Two Women, Two Views,” Goldfarb Vein Gallery, Beverly Hills, CA',
    '1992 – “Gender: Beauty and Power,” Onyx Gallery, Hollywood, CA',
    '1992 – “The Art Speaks for Itself,” Director’s Guild of America, Los Angeles, CA',
    '1992 – “They Came from L.A.,” Gallerie Atelier, Philadelphia, PA',
    '1991 – International Gallery on Broadway, Santa Monica, CA',
    '1991 – “The Human Figure,” Gallery 825, L.A. Art Association, Los Angeles, CA',
    '1991 – Dos Manos Hillside Gallery, Sedona, AZ',
    '1991 – Gallery Telesis, Sedona, AZ',
    '1990 – Kerckhoff Art Gallery, University of California, Los Angeles, CA',
  ];

  exhibitions.forEach((exhibit) => {
    const li = document.createElement('li');
    li.classList.add('exhibit');
    li.textContent = exhibit;
    exhibitionsList.appendChild(li);
  });

  content.appendChild(exhibitionsList);
}

export default loadProfile;
