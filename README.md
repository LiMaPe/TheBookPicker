# The Book Picker

## Welcome to my first React App!

I learned a lot doing “The Book Picker Project”! Starting to learn React sure did feel like a jump, but fortunately a jump forward and not down a dark rabbit hole. After finishing this project, I read the book The Pragmatic Programmer by Andy Hunt and Dave Thomas and it helped me to make it even more clear on the benefits of React. 

People have different learning styles, mine is writing. I like to listen, do, read and then write down what I learned. For this project I decided to share some of my personal learning notes. The purpose of this is first, I make more thorough notes if I imagine that someone will read them and second to show you some of what I have learnt during this project. Enjoy! 

The following is a summary on one important subject that bind together the use of the React library and lessons learnt by reading The Pragmatic Programmer, de-coupling or orthogonality.

Andy and Dave discuss techniques to maintain orthogonality in The Pragmatic Programmer. Orthogonal in computing signify decoupling. That is, if we make a change to e.g. a class name, do we then need to go to other parts of the code base and make changes to make is work? If so, they are coupled. An easier word to grasp is independence. If the module is independent, you will not have a cascading need of change in other parts of the code base when implementing a change in the module. 

#### Why is this great?

When you need to do a change, or fix a bug, it is far easier if the changes are localized. A large block of code is harder to write, read and maintain. 

When you first write your component, you have an idea of what purpose it will meet in your application. That purpose is likely to also be needed elsewhere in the future. It is usable code, so let´s make it easy to re-use it! With this I mean, write components that are really good at serving their purpose, and make them generic enough to be able to serve that purpose in a range of different implementations. 

#### How does it work? 

I compare to vanilla JavaScript, since that is the language I have learnt so far. If I want a piece of code in JS to be reusable, I will write it as a function. Then whenever I need that piece of logic, I will call the function. In React you write components, create a class and are then able to place an instance or multiple instances of that class where it is needed. I find it easier to think of this visually, each component is a piece of Lego. When I put my app together I look at my Lego pieces and put them together in the order I want. One Lego piece, or component, in my project is the big button with the text “what should I read next?” it has the class of “Action”. If I want to move this component I would simply take the lego piece and place it elsewhere, or if I want four of the same buttons I will create 4 instances of the class “Action”. This make the UI easier to change. 


#### What to aim for!

-	Small and independent components
-	Keep the business logic in a separate config file, the components need to be as generic as possible. 







