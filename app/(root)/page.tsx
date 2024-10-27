import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {
	const query = (await searchParams).query;

	const posts = [
		{
			_createdAt: new Date(),
			views: 55,
			author: {_id: 1, name: "Adam"},
			_id: 1,
			description: "This is a description",
			image: "https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3RzfGVufDB8fDB8fHww",
			category: "Robots",
			title: "We Robots"
		},
	];

	return (
		<>
			<section className="pink_container">
				<h1 className="heading">Pitch Your Startup, <br /> connect with entrepreneurs</h1>
				<p className="sub-heading !max-w-3xl">Submit ideas, Vote on Pitches, Get noticed</p>
				<SearchForm query={query} />
			</section>

			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : "All Startups"}
				</p>

				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index) => (
							<StartupCard key={post?._id} post={post} />
						))) : (
						<p>No startups found</p>
					)}
				</ul>
			</section>
		</>
	);
}