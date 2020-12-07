import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Accordion from '../components/Accordion';

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Head>
				<title>Welcome to IMABI!</title>
				<link rel='icon' href='https://www.imabi.net/favicon.ico' />
			</Head>

			<main className='flex flex-col items-center p-5'>
				<div className='text-red-600'>
					<h1 className='py-5 text-4xl font-serif font-medium text-center'>
						My Mission
					</h1>
					<p className='text-center'>
						日本語の斬新な学習方法といえば、今日（いまび）からスタート！
					</p>
				</div>

				<div className=''>
					<hr className='my-5' />
					<h3 className='text-2xl text-center pb-2'>Wanna Learn Japanese?</h3>
					<p className='my-2'>
						To get started learning the wonderful language of Japanese, check out
						whichever level interests you. You're sure to find a treasure trove of
						information!
					</p>
					<ul className='px-4 py-2 bg-gray-100 rounded-md'>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/beginners-1'>Beginners 1 - 初級１</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/beginners-2'>Beginners 2 - 初級２</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/intermed-1'>Intermediate 1 - 中級１</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/intermed-2'>Intermediate 2 - 中級２</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/advanced-1'>Advanced 1 - 上級１</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/advanced-2'>Advanced 2 - 上級２</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/veteran-1'>Veteran 1</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/veteran-2'>Veteran 2</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/classical'>Classical Japanese - 古典語</Link>
						</li>
						<li className='cursor-pointer hover:bg-red-300 rounded-md py-1 px-2'>
							<Link href='/okinawan'>Okinawan - 沖縄口 </Link>
							<span>(Just 1 lesson for now)</span>
						</li>
					</ul>
					<hr className='my-5' />
				</div>

				<div className=''>
					<h3 className='text-2xl text-center pb-2'>Updates</h3>
					<ul className='p-2 bg-gray-100 rounded-md'>
						<li>4/17/20: Lesson 100 has been completely revised.</li>
						<li>3/24/20: Lesson 337 has been completely revised.</li>
					</ul>
					<hr className='my-5' />
				</div>

				<div className=''>
					<h3 className='text-2xl text-center pb-2'>Feedback</h3>
					<p>
						All feedback is greatly appreciated. Both learners and natives are free to
						help collaborate. IMABI would not be what it is today without the help of
						individuals who share my same wish for everyone to know Japanese. Contact
						me at{' '}
						<a
							className='underline cursor-pointer hover:bg-red-300'
							href='mailto:imabinosekai@gmail.com'
						>
							imabinosekai@gmail.com
						</a>{' '}
						to get that question answered you want an answer to, or if you have ideas
						on how to update and expand content, let me know! I also accept questions
						through{' '}
						<a
							className='underline cursor-pointer hover:bg-red-300'
							href='https://www.facebook.com/IMABI-180193235374724/'
						>
							Facebook.
						</a>
					</p>
					<hr className='my-5' />
				</div>

				<div className=''>
					<h3 className='text-2xl text-center pb-2'>
						The Origin of IMABI「いまび」の命名について
					</h3>
					<p className='my-3'>
						The Japanese word for today is kyō. This word is an ancient one, and
						through the adoption of Chinese characters into Japanese, it became
						spelled as 今日. These characters then gave birth to other possible
						readings for the word "today," one being "kon'nichi," which many will
						recognize from "kon'nichi wa" meaning "hello/good afternoon."
					</p>
					<p className='my-3'>
						When learning how to read and write Japanese, foreigners and Japanese
						speakers alike struggle to learn the many pronunciations of each
						character. As for 今日, many learners will recognize 今 (read as "ima") as
						the character for "now" and 日 (read as "hi") as the word for "day." When
						a reader gains a decent control of spelling, accidentally uttering
						nonexistent words is inevitable. However, these trial and error moments
						encapsulate the very journey of learning Japanese.
					</p>
					<p className='my-3'>
						As a kid myself, one of my first questions was why 今日 couldn't be read
						as "imabi." Yes, the word for "today" is kyō, but 今日は alone
						demonstrates that even the simplest combination of characters can produce
						multiple words. In fact, 今日日 is also a word and it happens to be read
						as "kyōbi", and if that doesn't strike as being strange, then why does
						"imabi" have to be so strange?
					</p>
					<p className='my-3'>
						Upon trying to come up with a name for my own Japanese curriculum, with
						"guide to Japanese" not being an option, my mind returned to this trivial
						yet inquisitive thought. Why not call it 今日? But with a twist! That
						twist I had thought of years prior, and so I did. IMABI was going to
						symbolize the new "today" for learning Japanese. Love or hate the name, it
						has stuck around for the decade this website has been a place for learners
						to know more about Japanese from a perspective very much unlike anything
						else.
					</p>
					<hr className='my-5' />
				</div>

				<div className='w-full'>
					<h3 className='text-2xl text-center pb-2'>
						What is IMABI Exactly?「いまび」とは何ぞや？
					</h3>
					<Accordion
						content="It goes without saying that IMABI is no Genki, it is no Tae Kim's Guide.
								If my goal was to do what they did, I could have just uploaded their
								pdfs to the Internet as my own, but even then I would be late to the
								game. To those that wish for it to be more like these much needed
								resources, my response is NO, but I'm not saying no to further changes
								over time. IMABI is still an UNFINISHED work, though, and my vision for
								it will continue to evolve over time. As I strive to devote more of my
                passion to this work, you will see that the best is yet to come."
						title='IMABI is no Tae KIM...'
					/>
					<Accordion
						content="First and foremost, IMABI is a compilation of all information I've ever 
            thought needed for someone to fully know Japanese. Unlike a standard textbook or series, 
            there is no end to how much information is stored here. If you stumble on something you 
            find peculiar and want an answer for it, I've likely already thought about that. Each lesson is 
            more like an article on a given topic or topics. I take the liberty in defining how important I 
            feel each topic is. If you find it in my Beginners 1 section, I'm telling you that it is important 
            to learn before anything else. If something is in my Veterans section, I'm telling you that you don't 
            have to know it to speak decent Japanese, but the information is still a part of the language. 
            The organization of IMABI, though, is subject to change, so if you disagree with where something is, 
            I will listen to your feedback."
						title='Then what is IMABI?'
					/>
					<Accordion
						content="This question has been posed to me a lot over the years, often times by people who haven't bothered to read it themselves, but I too will admit that IMABI is not designed to be easy. When does a small explanation ever suffice to fully understand a topic. That'd be like telling a class of algebra students that X + Y = Z, that that's all they need to know, and then leaving the room. If you want that experience, let me introduce you to www.guidetojapanese.org. 
            All jokes aside, the world is full of resources designed to hold your hand. Everyone's goal is different. Do you want to learn Japanese just to understand anime? Do you have a Japanese spouse and wish to communicate with them on an even level? Do you aspire to become a translator? Each motive brings about a different level of proficiency required to meet that goal.  
            As stated above, each lesson is like an article for that topic(s). Lessons are intended to be ordered by importance. What is the most logical progression you should learn each piece to the Japanese puzzle? There is no single right answer to this question, which is why I continue revising, reorganizing, and creating content to better solve this puzzle. This brings us to something rampantly misunderstood by people, and that is the use of vocabulary, Kanji, and grammar in any given page. IMABI can be friendly to you so long as you allow yourself the time to fully understand the topic at hand. The moment you get ahead of yourself is when IMABI becomes too difficult."
						title='Why is IMABI so difficult? What about it is user-friendly?'
					/>
					<Accordion
						content="One thing frequently misunderstood is the use of varied vocabulary, Kanji, and grammar. When reading through any mainstream textbook or resource, a learner is expected to study a few hundred words here and a few hundred Kanji (Chinese characters) there. At most, a learner may pass N3 if they study really hard with a textbook like Genki. In reality, an educated native speaker will know upwards of 50,000 words and will recognize 3-5,000 Kanji. The gap between learner and native by these numbers is terrifying. 
            It is also true that of those 50,000 words that only about 2,000 unique words will be used by a speaker on any given day. The amount of Kanji used will also be significantly less than 3,000. What makes the rest so important is that with each new conversation, different words and Kanji will be needed. If you were tasked with devising a way of teaching as much vocab and Kanji as feasibly possible, what would you do? 
            Mainstream textbooks and resources choose to opt for that 2,000 word benchmark, but in reality a learner will only be made to learn a few hundred handpicked vocabulary and Kanji, always centered around readings created to achieve that purpose. Mistakes brought about from the simplified explanations are meant to be corrected by the teacher, whose goal is to make sure you're on topic and not so much that you're learning as much Japanese as possible. Your hand is always being held, and there is zero obligation and incentive to steer off course, lest you wish to fail your class. 
            As for IMABI, your hand is not meant to be held. You are in control of how much time you devoted to Japanese. I encourage all users to use other textbooks and resources on top of IMABI. If you make the choice to go to Intermediate without having done your hours of vocab and Kanji practice, that's your problem. You have just as much access to what's on the Internet as anyone else. If you're happening to study Japanese at school, you have all the more resources at your disposal. If you do not bother to read a single book and find the word choices used in the Advanced lessons out of reach, perhaps you should've read a book or two. 
            It goes without saying that there are many different kinds of learners. Some are much more comfortable with learning through practice with natives. Most adult learners, though, require instruction to understand a foreign language properly. When you read a page on IMABI, it's my job to make sure that that topic is explained as best as possible. You are tasked with having that dictionary tab opened. You are the one responsible for reading practice. If a new Kanji is used here and there, take the time to learn it.
            Now, if the material of IMABI as a whole is supposed to be progressive in nature, that still means there is a time and place to learn anything. If you don't know the word 動物, you have no reason to already know what 薨去 means. This is a principle that I am still trying to address, and so if you feel like other vocabulary or Kanji should be emphasized, especially for a page in a beginner or intermediate section, please let me know."
						title="Why All This Vocab and Kanji? Can't You Be Basic?"
					/>

					<Accordion
						content='Yes! Many devoted users know very well that all it takes to have something considered or changed is that simple e-mail. Some suggestions take longer to fulfill than others, but feedback has always been crucial to the development of this website. '
						title='Do You Listen to Feedback?'
					/>
					<Accordion
						content="No, I am not a native speaker of Japanese. I have, however, spoken the language for over 15 years. No one is perfect, but I continue pushing myself to better my own skills so that I may be a better educator.
            As for the contribution of native speakers is concerned, native speakers have proofread much of what you see. The only line in the sand drawn regarding native input is whether the intent by the speaker is emotionally driven rather than factually driven. Whether you're native or a non-native speaker, any correction request must be accompanied with evidence.  
            If someone is willing to say the website is riddled with mistaken Japanese but refuses to say how, then that person has already discredited himself. It is important to always read what the purpose of any lesson is for. There are many sections that are meant to study the limits of Japanese grammar, so ignoring a tag saying 'unnatural' may very well confuse you. Many comments stem from people not seeing these tags.
            All help is appreciated, and not just regarding corrections. For me to to redo or make new content, even with an idea in place, can take days to complete as a one-man team. Collaborators would be greatly appreciated."
						title='What About Native Speakers? Are You Native?'
					/>
					<hr className='my-5' />
				</div>

				<div className=''>
					<h3 className='text-2xl text-center pb-2'>Funding</h3>
					<p className='my-3'>
						The site has remained free throughout its long history, but it does
						require a lot of time and energy to upkeep. Due to financial hardships, I
						personally cannot entirely devote myself to this website. Any financial
						contribution to help keep me afloat will always be greatly appreciated.{' '}
						<a
							className='underline cursor-pointer hover:bg-red-300'
							href='https://www.gofundme.com/remastering-japanese-curriculum?utm_source=internal&utm_medium=email&utm_content=campaign_link_t&utm_campaign=welcome'
						>
							GoFundMe!
						</a>
					</p>
				</div>
			</main>
			{/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
		</div>
	);
}
