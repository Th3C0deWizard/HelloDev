import ArticleSet from "../components/ArticleSet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Article from "../models/Article";

const articles = Array.from(
	{ length: 8 },
	(a, i) =>
		new Article(
			i,
			"Titulo",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris turpis, cursus sit amet quam quis, varius aliquam nulla. Etiam vel risus vitae massa fermentum lacinia. Maecenas malesuada imperdiet feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ornare, mi sed volutpat dignissim, felis nibh malesuada tortor, rutrum lobortis enim enim non sapien. Nullam eget finibus dui. Nulla fringilla sodales pellentesque. Nulla a rhoncus diam, a pretium dolor. Sed sagittis augue a elit ullamcorper, a porttitor diam rhoncus. Morbi leo tellus, dignissim quis finibus non, pretium at enim. Etiam risus lacus, consectetur et dolor eget, convallis volutpat mi. Aliquam dolor justo, tempor sit amet tellus id, lacinia malesuada dui. Donec convallis libero vitae sem ultricies tempus quis ac nulla. Proin nibh massa, volutpat et ullamcorper fringilla, iaculis sit amet ante. Maecenas eleifend mi at turpis molestie cursus. Ut sit amet orci libero.",
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est massa, mollis non nisl ac, egestas mattis magna. Donec laoreet convallis turpis, eu interdum ipsum gravida vitae. Aenean dolor dui, bibendum sit amet commodo id, maximus vitae dolor. Praesent non tincidunt purus. Nullam ut dapibus sem, ac egestas erat. Praesent quam sapien, varius nec placerat ac, congue id metus. Maecenas in tellus posuere, fringilla ex et, hendrerit sem. Donec auctor, arcu eu bibendum eleifend, mi leo suscipit nunc, ut ornare tellus erat id libero. Aenean hendrerit ornare pulvinar. Suspendisse interdum odio non massa tristique vestibulum. Proin eget leo vel nunc venenatis interdum eu non ex.Mauris eget efficitur urna, ac hendrerit mi. Pellentesque imperdiet pulvinar erat, placerat porta arcu elementum a. Nulla laoreet, velit eget blandit viverra, mauris urna rutrum dui, sit amet dictum turpis arcu id massa. Integer blandit eu enim nec facilisis. Cras luctus nulla at feugiat convallis. Fusce semper nisl non nibh maximus venenatis. Aenean eu hendrerit turpis. Pellentesque dictum varius pharetra. Nullam scelerisque faucibus consectetur. Donec laoreet magna lobortis hendrerit facilisis. Nunc condimentum non est et hendrerit.
			
			Nunc dolor massa, auctor sed magna id, maximus tincidunt justo. Vestibulum eu massa leo. Duis egestas lacinia leo, vitae rutrum lacus vulputate non. Sed semper, felis ut molestie tempor, nisl magna sollicitudin ipsum, at eleifend mi nunc eget leo. Aliquam erat volutpat. Aliquam a pretium quam. Aliquam erat volutpat. Fusce consequat ex sed massa suscipit, et imperdiet leo rhoncus. Nulla eu ultrices lacus, sed auctor tortor. Morbi auctor ornare justo ut scelerisque. Aliquam odio ante, sagittis eget mollis eu, hendrerit quis mi.
			
			Cras posuere tempor tortor et maximus. Vestibulum ultrices bibendum vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc posuere diam mi, vitae volutpat leo tempus id. Vivamus porttitor malesuada urna at fermentum. Aenean nec vehicula elit. Aenean mauris quam, pretium tempor nisl ac, tempus lobortis massa. In id pretium metus. Curabitur est enim, suscipit sed iaculis sit amet, feugiat eget lectus. Duis purus urna, pharetra nec scelerisque ut, finibus commodo tortor. Praesent eros orci, laoreet quis turpis a, tincidunt cursus ligula. Nulla eget arcu malesuada augue pharetra lacinia a quis lacus.
			
			Donec bibendum dui id semper imperdiet. Donec efficitur tempus ornare. Fusce at justo nec augue hendrerit sollicitudin. Morbi feugiat dui quis enim dictum dapibus. Quisque ornare erat at dolor cursus, ut malesuada elit fermentum. In ac placerat justo. Nullam nec nisi metus. Donec sit amet nisi risus.`,
			"Roberto Perez",
			"1982-10-12",
			`https://picsum.photos/seed/${i * Math.random()}/400/300`,
		),
);

function Root() {
	return (
		<div className="bg-slate-900">
			<Header />
			<ArticleSet articles={articles} />
			<Footer />
		</div>
	);
}

export default Root;
