using System;
using System.Collections.Generic;


namespace wish_list
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Wishes> iWishFor = new List<Wishes>();

            iWishFor.Add(new Wishes { Wish = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'" });
            iWishFor.Add(new Wishes { Wish = "The ability to think of interesting wishes on short notice" });
            iWishFor.Add(new Wishes { Wish = "A washtub of Skittles" });
            iWishFor.Add(new Wishes { Wish = "World peace, but not the kind of world peace where all the humans are removed from existence" });
            iWishFor.Add(new Wishes { Wish = "A TV that is NOT internet-capable" });
            iWishFor.Add(new Wishes { Wish = "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?" });

            Console.WriteLine("My wishes...");
            iWishFor.ForEach(Wishes => Console.WriteLine(Wishes.Wish));

        }
    }



    public class Wishes
    {
        public string Wish { get; set; }
    }
}
