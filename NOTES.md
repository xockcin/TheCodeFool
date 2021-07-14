# 7/13/21

I want to have two portfolio pages. One will be called "The Code Fool" and will be fun and cool to look at. The other will just be my name and will be minimalist and professional.

As I've said earlier elsewhere, I already have a working version of this, the "fun" portfolio page, built as a traditional webpage. The challenge is to build it as a React app.

This time, no Bootstrap. I'm going to do the styling and even the modal using actual CSS.

Also, of course, absolutely no class components. Functions and hooks only.

Let's look at it again. I love the splash page. It's perfect. The menu looks great too, although it should be a little bit bigger.

I like that the splash feature is a modal. I have mixed feelings about putting the content in modals as well, but I'll probably keep it for now.

So here is my to-do:
- Build out the splash modal and main menu. As the page is built now, the header, footer and background will be everywhere, and can therefore be directly inside the App component, maybe as a wrapper. There will also be a component for the splash modal and another for the menu.
- Figure out the functionality for the portfolio features. I don't want them to be just external links. I want the site itself to have a "project page" for each of my portfolio projects. I'm seeing the design as something like a Magic card. But before I figure out the visual design, I need to just say what information I want about it: title; tagline; picture; description; list of techs used; stage.
- I also need to figure out how to implement a blog. I like the idea of doing it myself, i.e. not bringing in some sort of third-party library. Indeed, in general I like the idea of , as much as possible, just using React and CSS - and, I suppose, React Router - but no Bootstrap, no Redux, etc.
- Note that I would also like to create a less fun, more boring and professional-looking portfolio site. They will have the same information and basically the same functionality but will look different. I will send either one or the other depending on what job I'm applying to. The boring one will probably be the default, but each will contain a link to the other.

Right now it's just after ten on Tuesday. I have the rest of Tuesday, as well as Wednesday and Thursday, to get this done. My goal is to start applying to jobs in earnest in a week. So I have a lot to do!

# 7/14/21

The next day, 4pm. I had this idea that I would make two portfolios, one staid and professional looking, the other fun and cool and whimsical (i.e. this one). But then I looked at some portfolio examples, and none of them were staid. They were all trying to be fun, and I thought they all sucked. I think mine is better! So I should just proceed with mine.

So the challenge is, build out what I already have, but build it out with React.

So let's think about it. Better yet, let's look at the code for version 1.

It's all HTML! Woof. I do not miss those days.

It is a single-page app, which is nice. Even before I learned React, I still knew instinctively that SPA is the way to go. But the code is just excruciating to look at. I'm never going back.

I think I should start with the header and footer. Here we go.