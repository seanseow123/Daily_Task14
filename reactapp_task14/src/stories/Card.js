import React from "react";
import { MediaCard } from "./Card.stories";

export const Card = () => {

    return (
      <>
        <MediaCard label={"This is a card: "} alt={"This is an image"} image={"https://commons.wikimedia.org/wiki/Lizard#/media/File:Lizard_(4153831173).jpg"}/>
      </>
    )
}

