import { CreateSuggestionsDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionsDto } from './dto/update-suggestion.dto';
import { SuggestionsService } from './suggestions.service';
export declare class SuggestionsController {
    private readonly service;
    constructor(service: SuggestionsService);
    index(): Promise<import("./entities/suggestion.entity").Suggestions[]>;
    find(id: string): Promise<import("./entities/suggestion.entity").Suggestions>;
    create(suggestion: CreateSuggestionsDto): Promise<import("./entities/suggestion.entity").Suggestions>;
    update(id: string, updateSuggestionsDto: UpdateSuggestionsDto): Promise<import("./entities/suggestion.entity").Suggestions>;
    delete(id: string): Promise<import("./entities/suggestion.entity").Suggestions>;
}
