{
  // intercae - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Poor Dev",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //Practice
  //Default value null
  interface Player<T, X = null> {
    name: string;
    laptop: {
      brand: string;
      model: string;
    };
    smartWatch: T;
    //Optional
    car?: X;
  }

  interface ImilabWatch {
    brand: string;
    model: string;
  }

  const poorPlayer: Player<ImilabWatch> = {
    name: "Anik",
    laptop: {
      brand: "Asus",
      model: "X909",
    },
    smartWatch: {
      brand: "imilab",
      model: "r7",
    },
  };

  interface AppleWatch2 {
    brand: string;
    model: string;
    heartMonitor: number;
    stopWatch: string;
  }

  interface Bmw {
    model: string;
    brand: string;
  }

  const richPlayer: Player<AppleWatch2, Bmw> = {
    name: "Ahmed",
    laptop: {
      brand: "Asus",
      model: "X909",
    },
    smartWatch: {
      brand: "imilab",
      model: "r7",
      heartMonitor: 232,
      stopWatch: "yes",
    },
    car: {
      model: "x7",
      brand: "Bmw",
    },
  };

  //
}
