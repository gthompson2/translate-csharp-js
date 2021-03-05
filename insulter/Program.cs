using System;
using System.Collections.Generic;

namespace insulter
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> insults = new List<string>
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            // Create an empty list of integers
            List<int> indexes = new List<int>();
            while (indexes.Count < 3) // While there are less than 3 integers in the list...
            {
                Random rand = new Random();
                // get a random int representing one of the indexes of the insults list
                int candidate = rand.Next(0, (insults.Count - 1));

                // If the indexes list does not already contain the integer at candidate,
                // Add it to the indexes list
                if (!indexes.Contains(candidate))
                {
                    indexes.Add(candidate);
                }
            }

            for (int i = 0; i < indexes.Count; i++)
            {
                int index = indexes[i];
                Console.WriteLine(insults[index]);
            }

        }
    }
}
